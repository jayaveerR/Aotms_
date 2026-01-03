import { useState } from "react";
import { Header } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { EventManager } from "../components/events/EventManager";
import { hackathons } from "../data/events";
import { RegistrationModal } from "../components/ui/RegistrationModal";

const HackathonsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeEventName, setActiveEventName] = useState("");

    const handleRegister = (eventName: string) => {
        setActiveEventName(eventName);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main className="pt-24 md:pt-32 pb-36 md:pb-20 lg:pb-20">
                <EventManager
                    events={hackathons}
                    onRegister={handleRegister}
                    title="Hackathons"
                    subtitle="Compete, innovate, and build world-class solutions in our signature hackathons."
                />
            </main>
            <Footer />
            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                itemName={activeEventName}
            />
        </div>
    );
};

export default HackathonsPage;


