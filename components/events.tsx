import Navigation from "./navigation";
import { Calendar, Clock, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface EventsProps {
  onNavigate: (
    page: "home" | "menu" | "events" | "membership",
  ) => void;
}

export default function Events({ onNavigate }: EventsProps) {
  const upcomingEvents = [
    {
      id: 1,
      title: "Puppy Training Workshop",
      date: "October 28, 2025",
      time: "2:00 PM - 4:00 PM",
      description:
        "Learn basic obedience training techniques with certified trainers.",
      capacity: "12 members",
    },
    {
      id: 2,
      title: "Coffee Tasting Session",
      date: "November 2, 2025",
      time: "6:00 PM - 8:00 PM",
      description:
        "Explore different coffee origins and brewing methods with our baristas.",
      capacity: "20 members",
    },
    {
      id: 3,
      title: "Dog Photography Day",
      date: "November 10, 2025",
      time: "10:00 AM - 2:00 PM",
      description:
        "Professional photographer available for portraits of you and your pup!",
      capacity: "15 members",
    },
    {
      id: 4,
      title: "Monthly Member Meetup",
      date: "November 15, 2025",
      time: "7:00 PM - 9:00 PM",
      description:
        "Social gathering for members to connect and share stories.",
      capacity: "30 members",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation
        onNavigate={onNavigate}
        currentPage="events"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4 text-neutral-900">
            Events Calendar
          </h1>
          <p className="text-xl text-neutral-600">
            Coming soon! Check back for exciting events and
            gatherings.
          </p>
        </div>
      </div>
    </div>
  );
}