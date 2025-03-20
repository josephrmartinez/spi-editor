import Logo from "./logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="flex flex-col flex-end w-full">
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
          <Button variant="ghost">Privacy Policy</Button>
          <Button variant="ghost">Terms & Conditions</Button>
        </div>
        <div className="text-xs text-muted-foreground  text-center md:text-right">
          ConnectInk © 2025 Insights & Innovations | Supported by Teachers
          College, Columbia University
        </div>
      </div>
    </div>
  );
};

export default Footer;
