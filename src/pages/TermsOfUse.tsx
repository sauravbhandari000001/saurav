import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Use
            </h1>
            <p className="text-muted-foreground text-lg">
              Please read these terms carefully before using our services
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 space-y-6">
              
              <section>
                <p className="text-sm text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                <p className="leading-relaxed">
                  The site https://zaliantservices.com/ (hereinafter referred to as Zaliant Services or the Site) is an Internet resource that provides Supporting applications for various computer games, personal User Profile, a platform for communication of Users and other sections. Supporting application (hereinafter referred to as the Supporting Application or Product) is software designed to run on a computer that provides the User with the ability to dominate other players of the computer game for which this application was developed by means of various auxiliary functions that affect the gameplay. Use of the Site or Companion Application is possible only under the conditions set forth in these User and License Agreements. If you do not agree with its terms, then you should immediately stop using the Site and Companion Application. Using the Site or the Supporting Application means that you agree to the terms of these License and User Agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Terms and Definitions</h2>
                <div className="space-y-4">
                  <p><strong>Site</strong> - an Internet resource located at https://zaliantservices.com/. The Site, depending on the context, also means the software of the Site, the design (graphic design) of the Site, the Site Database, any of its sections and subsections, as well as information posted on the Site by the Site Administration.</p>
                  
                  <p><strong>Site Administration</strong> - the person who owns all relevant exclusive property rights to the Site or Supporting Applications, including the rights to the domain name of the Site, and administering it.</p>
                  
                  <p><strong>User</strong> - a person who purchased the Zaliant Services Product and passed the registration procedure, received an individual username and password, and also has his own Profile. For the purposes of the User Agreement, the User also means a person who has not purchased the Product, but who accesses the Site or Companion Application and/or uses and/or has used it.</p>
                  
                  <p><strong>User Profile or Profile</strong> - a special subsection of the Site where personal information about the User is located, as well as other information that can only be posted by this User.</p>
                  
                  <p><strong>Information</strong> - any information, messages, data, regardless of the form of their presentation, posted by the User on the Site, including: personal data of Users, links to other sites, any text messages, photographs (images), audio and/or video works, computer programs, and other files.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">License Agreement</h2>
                <div className="space-y-4">
                  <p>The User undertakes not to distribute the Zaliant Services Product on the Internet or in any other place where digital information may be stored.</p>
                  
                  <p>As a condition of use, the User undertakes not to use the Zaliant Services Product for any purpose that are illegal or violate the Agreement.</p>
                  
                  <p>The user does not have the right to reverse, analyze, modify, etc. Zaliant Services Product, as well as the transfer of its authorization data (username and password) and the resale of the Zaliant Services Product to third parties.</p>
                  
                  <p>To prevent the distribution of the Product on the Internet, Zaliant Services uses the binding of the Product to a computer, which makes it impossible to launch the Product on other or multiple computers. The product will only work on the computer on which it was first launched.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Personal Data</h2>
                <p className="leading-relaxed">
                  Information about the User located in his Profile contains (may contain) his personal data. When processing personal data of Users, the Site Administration undertakes to take all organizational and technical measures to protect them from unauthorized access in a manner not provided for by the Site or the Supporting Application. By posting his personal data, the User confirms that he does it voluntarily, and also that he voluntarily provides this Information to the Administration for processing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Important Terms</h2>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Any functions as well as all software may stop working at any time.</li>
                    <li>In case of detection <strong>NO REFUND!</strong></li>
                    <li>In case of a ban there is <strong>NO REFUND!</strong></li>
                    <li>We do not refund if the system specifications do not match our description.</li>
                    <li>We do not refund or exchange if you have purchased the wrong product.</li>
                    <li>We do not refund funds if you purchased the program, and for some reason it has suspended its work for a certain or indefinite period.</li>
                    <li>Compensation can only be made when we consider it necessary to make it.</li>
                    <li>When problems arise, we help customers through remote access, if you refuse to provide it to us, we will not issue a refund.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Liability</h2>
                <p className="leading-relaxed">
                  All possible consequences of using the Supporting Applications are assumed by the User. The Administration does not bear any responsibility for the possible consequences of using the Supporting Applications. The User agrees to send anonymous statistics in order to improve the quality of the Zaliant Services Product.
                </p>
              </section>

              <section>
                <p className="text-sm text-muted-foreground">
                  This Agreement may be changed by the Administration at any time without any special notice. The new version of the Agreement comes into force from the moment it is published on the Site.
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}