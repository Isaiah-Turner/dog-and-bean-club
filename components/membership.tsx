import Navigation from "./navigation";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface MembershipProps {
  onNavigate: (
    page: "home" | "menu" | "events" | "membership",
  ) => void;
}

export default function Membership({
  onNavigate,
}: MembershipProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation
        onNavigate={onNavigate}
        currentPage="membership"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4 text-neutral-900">
            Membership Plans
          </h1>
          <p className="text-xl text-neutral-600">
            Coming soon! Learn about our membership options and
            benefits.
          </p>
        </div>
      </div>
    </div>
  );
}