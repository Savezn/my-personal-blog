import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "bg-muted/80 text-muted-foreground hover:bg-muted/90",
          title: "text-muted-foreground",
          message: "text-muted-foreground",
          description: "text-muted-foreground",
        }
      }}
      {...props} />
  );
}

export { Toaster }
