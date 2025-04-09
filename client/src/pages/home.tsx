import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyFlowOpsSection } from "@/components/sections/why-flowops-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { DashboardPreviewSection } from "@/components/sections/dashboard-preview-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactSection } from "@/components/sections/contact-section";
import { useEffect } from "react";

export default function Home() {
    // Smooth scrolling for anchor links
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.hash !== '#') {
                e.preventDefault();

                const targetElement = document.querySelector(anchor.hash);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <Header />
            <main>
                <HeroSection />
                <WhyFlowOpsSection />
                <FeaturesSection />
                <DashboardPreviewSection />
                <BenefitsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
