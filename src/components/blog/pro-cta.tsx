
import { Card, CardContent } from "@/components/ui/card";

const proStruggles = [
    "Expensive advertising with poor returns",
    "Time-wasters and no-shows",
    "Competing on price alone",
    "No online presence or credibility",
    "Feast or famine work cycles",
]

const proGains = [
    "Quality Leads Daily - Only serious customers who need services now.",
    "Build Online Reputation - Collect verified reviews and showcase your portfolio.",
    "Flexible Membership Options - Free tier to get started, affordable premium plans.",
    "Business Growth Tools - Dashboard with performance metrics and insights."
]

const proMetrics = [
    { value: "4.7/5", label: "Average rating" },
    { value: "200,000+", label: "Jobs completed nationwide" },
    { value: "R50M+", label: "Generated for SA professionals" },
    { value: "40%", label: "Avg. customer base growth in 6 months" },
]

export default function ProCta() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                     <header className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Why 15,000+ Professionals Choose Gaupro to Grow Their Business</h2>
                        <p className="text-xl text-muted-foreground">For Service Professionals: Gaupro is a Business Game-Changer</p>
                    </header>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold mb-3 text-lg">Before Gaupro, professionals struggled with:</h3>
                             <ul className="space-y-2 text-muted-foreground">
                                {proStruggles.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="text-red-500">❌</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                             <h3 className="font-semibold mb-3 text-lg">With Gaupro, professionals enjoy:</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                {proGains.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-green-500">✅</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <Card className="bg-secondary/50">
                        <CardContent className="p-6">
                             <blockquote className="text-center text-lg text-foreground italic">
                                "Gaupro transformed my one-man operation into a thriving business with 3 employees. I've completed 500+ jobs through Gaupro with a 4.9-star rating. The platform pays for itself in the first job every month!"
                                <cite className="block not-italic mt-2 font-semibold text-sm">- John from John's Plumbing, Cape Town</cite>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <div>
                        <h3 className="text-xl font-bold text-center mb-6">Gaupro Success Metrics for Professionals</h3>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {proMetrics.map((metric, index) => (
                                <div key={index} className="p-4 border rounded-lg bg-card">
                                    <p className="text-2xl font-extrabold text-primary">{metric.value}</p>
                                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
