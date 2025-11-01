
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, DollarSign, Users, Clock, UserPlus } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { jobRequests } from '@/lib/job-requests-data';

const MAX_QUOTES_ALLOWED = 5;

export default function BrowseLeadsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-secondary/30">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-normal mb-4">Live Job Requests</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  These are real, active job requests from customers in your area. Sign up for free to start quoting and winning work today.
                </p>
                <Button asChild size="lg" className="mt-6">
                    <Link href="/pro/register">
                        <UserPlus className="mr-2 h-5 w-5" />
                        Create Your Free Profile
                    </Link>
                </Button>
              </div>

              <div className="space-y-6 max-w-3xl mx-auto">
                {jobRequests.map((job) => {
                  const isClosed = job.quotes >= MAX_QUOTES_ALLOWED;

                  return (
                    <Card key={job.id} className="bg-card hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-grow">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                              <Badge variant="secondary" className="bg-blue-100 text-primary hover:bg-blue-200">{job.category}</Badge>
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-2 text-foreground">{job.title}</h2>
                            <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                          </div>
                          <div className="flex-shrink-0 w-full sm:w-56 text-sm space-y-2 text-muted-foreground">
                            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> <span>Posted {job.posted}</span></div>
                            <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> <span>Needed: {job.needed}</span></div>
                            <div className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> <span>Budget: {job.budget}</span></div>
                            <div className="flex items-center gap-2"><Users className="h-4 w-4" /> <span>{job.quotes} quotes submitted</span></div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          {isClosed ? (
                            <Badge variant="destructive">Job Closed</Badge>
                          ) : (
                            <Button asChild className="w-full sm:w-auto">
                               <Link href="/pro/register">Sign Up to Quote</Link>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
