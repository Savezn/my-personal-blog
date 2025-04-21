import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const AuthRequiredModal = ({ onClose, onCreateAccount, onLogin }) => {
  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className={"text-center text-2xl"}>Create an account to continue</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex flex-col space-y-2">
          <Button onClick={onCreateAccount} className="bg-primary text-white hover:bg-secondary">
            Create account
          </Button>
          <p className="text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Button onClick={onLogin} variant="link" className="p-0">
              Log in
            </Button>
          </p>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AuthRequiredModal;