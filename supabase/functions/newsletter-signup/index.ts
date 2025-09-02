import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.49.1';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsletterSignupRequest {
  email: string;
  source?: string;
}

Deno.serve(async (req) => {
  try {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { email, source = 'website' }: NewsletterSignupRequest = await req.json();

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Valid email address is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get user info if authenticated
    const authHeader = req.headers.get('Authorization');
    let userId = null;
    
    if (authHeader && authHeader !== 'Bearer ') {
      try {
        const token = authHeader.replace('Bearer ', '');
        const { data: { user } } = await supabase.auth.getUser(token);
        userId = user?.id || null;
      } catch (error) {
        console.log('No valid user session, proceeding without user ID');
      }
    }

    // Check if email already exists
    const { data: existingSubscriber } = await supabase
      .from('newsletter_subscribers')
      .select('id, offer_sent')
      .eq('email', email)
      .maybeSingle();

    let subscriberId;
    let shouldSendOffer = false;

    if (existingSubscriber) {
      // Update existing subscriber
      const { data: updatedSubscriber, error: updateError } = await supabase
        .from('newsletter_subscribers')
        .update({ 
          user_id: userId,
          source: source,
          updated_at: new Date().toISOString()
        })
        .eq('email', email)
        .select('id, offer_sent')
        .single();

      if (updateError) {
        console.error('Error updating subscriber:', updateError);
        return new Response(
          JSON.stringify({ error: 'Failed to update subscription' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      subscriberId = updatedSubscriber.id;
      shouldSendOffer = !updatedSubscriber.offer_sent;
    } else {
      // Create new subscriber
      const { data: newSubscriber, error: insertError } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email,
          user_id: userId,
          source: source,
          offer_sent: false
        })
        .select('id')
        .single();

      if (insertError) {
        console.error('Error creating subscriber:', insertError);
        return new Response(
          JSON.stringify({ error: 'Failed to subscribe to newsletter' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      subscriberId = newSubscriber.id;
      shouldSendOffer = true;
    }

    // Send welcome email with offer if needed
    if (shouldSendOffer && RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'FrostBoyz <noreply@frostboyz.com>',
            to: [email],
            subject: '🧊 Welcome to the Frost Fam - 10% OFF Inside!',
            html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Welcome to FrostBoyz</title>
                </head>
                <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc;">
                  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); padding: 40px 20px; text-align: center;">
                      <h1 style="color: #ffffff; font-size: 32px; font-weight: bold; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                        FrostBoyz<span style="color: #60a5fa;">.</span>
                      </h1>
                      <p style="color: #e0f2fe; font-size: 18px; margin: 10px 0 0 0;">Welcome to the Frost Fam! 🧊</p>
                    </div>

                    <!-- Main Content -->
                    <div style="padding: 40px 20px;">
                      <h2 style="color: #1f2937; font-size: 24px; font-weight: bold; margin: 0 0 20px 0;">
                        Your 10% OFF is Ready! ❄️
                      </h2>
                      
                      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        Welcome to the movement where street culture meets luxury. You're now part of the Frost Fam, 
                        and we're excited to help you build your ice collection.
                      </p>

                      <!-- Discount Code -->
                      <div style="background: linear-gradient(135deg, #1f2937, #111827); border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0;">
                        <p style="color: #9ca3af; font-size: 14px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 1px;">
                          Your Exclusive Code
                        </p>
                        <div style="background: #374151; border: 2px dashed #60a5fa; border-radius: 8px; padding: 15px; margin: 10px 0 20px 0;">
                          <span style="color: #60a5fa; font-size: 24px; font-weight: bold; letter-spacing: 2px;">
                            FROSTFAM10
                          </span>
                        </div>
                        <p style="color: #d1d5db; font-size: 14px; margin: 0;">
                          Valid for 30 days • Minimum order 100 RON
                        </p>
                      </div>

                      <!-- CTA Button -->
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="https://frostboyz.com/shop" 
                           style="display: inline-block; background: #1f2937; color: #ffffff; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
                          Shop the Frost →
                        </a>
                      </div>

                      <!-- Product Highlights -->
                      <div style="border-top: 1px solid #e5e7eb; padding-top: 30px; margin-top: 30px;">
                        <h3 style="color: #1f2937; font-size: 18px; font-weight: bold; margin: 0 0 20px 0;">
                          What Makes FrostBoyz Different:
                        </h3>
                        <ul style="color: #4b5563; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
                          <li style="margin-bottom: 8px;">🧊 Premium iced-out designs that never lose their frost</li>
                          <li style="margin-bottom: 8px;">🛡️ Hypoallergenic materials safe for sensitive skin</li>
                          <li style="margin-bottom: 8px;">🚚 Free worldwide shipping on orders over 150 RON</li>
                          <li style="margin-bottom: 8px;">🔄 14-day return policy + lifetime warranty</li>
                          <li style="margin-bottom: 8px;">⭐ Trusted by 10,000+ customers worldwide</li>
                        </ul>
                      </div>

                      <!-- Social Links -->
                      <div style="text-align: center; margin: 30px 0; padding: 20px; background: #f9fafb; border-radius: 8px;">
                        <p style="color: #6b7280; font-size: 14px; margin: 0 0 15px 0;">Follow the movement:</p>
                        <div>
                          <a href="https://www.instagram.com/frostboyz.jewelry" 
                             style="display: inline-block; margin: 0 10px; color: #3b82f6; text-decoration: none; font-weight: 500;">
                            Instagram
                          </a>
                          <a href="https://www.tiktok.com/@frostboyzromania" 
                             style="display: inline-block; margin: 0 10px; color: #3b82f6; text-decoration: none; font-weight: 500;">
                            TikTok
                          </a>
                        </div>
                      </div>
                    </div>

                    <!-- Footer -->
                    <div style="background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; font-size: 12px;">
                      <p style="margin: 0 0 10px 0;">
                        © 2025 FrostBoyz. All rights reserved.
                      </p>
                      <p style="margin: 0;">
                        Bucharest, Romania | frostboyz.jewelry@gmail.com
                      </p>
                      <p style="margin: 10px 0 0 0;">
                        <a href="https://frostboyz.com/politica-confidentialitate" style="color: #60a5fa; text-decoration: none;">
                          Politica de Confidențialitate
                        </a> | 
                        <a href="https://frostboyz.com/termeni-conditii" style="color: #60a5fa; text-decoration: none;">
                          Termeni și Condiții
                        </a>
                      </p>
                    </div>
                  </div>
                </body>
              </html>
            `,
          }),
        });

        if (emailResponse.ok) {
          // Mark offer as sent
          await supabase
            .from('newsletter_subscribers')
            .update({ offer_sent: true })
            .eq('id', subscriberId);
        }
      } catch (emailError) {
        console.error('Error sending welcome email:', emailError);
        // Don't fail the signup if email fails
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Successfully subscribed to newsletter',
        alreadySubscribed: !!existingSubscriber
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error: any) {
    console.error('Newsletter signup error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});