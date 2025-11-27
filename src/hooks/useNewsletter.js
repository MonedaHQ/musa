import { newsletterApi } from '@/services/apiNewsletter';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useNewsletter() {
  const { mutate: newsletterSignup, isLoading: isSigningUp } = useMutation({
    mutationFn: (data) => newsletterApi(data), // returns the promise
    onSuccess: () => {
      toast.success('Success!');
    },
    onError: (err) => {
      // ensure we derive a string message (err might be Error, string, or object)
      const msg =
        err?.message ||
        (typeof err === 'string'
          ? err
          : JSON.stringify(err || 'Failed to submit'));
      toast.error(msg);
    },
  });

  return { newsletterSignup, isSigningUp };
}
