export interface LocalUser {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
  };
}

export const useAuth = () => {
  const signOut = async () => {
    localStorage.removeItem('frostboyz-local-user');
  };

  return {
    user: null as LocalUser | null,
    loading: false,
    signOut,
  };
};
