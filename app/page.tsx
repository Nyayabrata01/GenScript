import Link from "next/link"
import { ArrowRight, Command, Terminal, Zap, Code, GitBranch, MessageSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import InstallCommand from "@/components/install-command"
import TerminalDemo from "@/components/terminal-demo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Terminal className="h-6 w-6" />
              <span className="inline-block font-bold">GenScript</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                How It Works
              </Link>
              <Link
                href="#docs"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Docs
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/Nyayabrata01/GenScript">
                  <GitBranch className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="#install">Install Now</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex justify-center items-center flex-col">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 ">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center justify-center">
            <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              Supercharge your terminal experience
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              AI-Powered Terminal <span className="text-primary">Assistant</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Run commands faster with AI-powered suggestions and natural language processing. Never remember complex
              command syntax again.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#install">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#docs">Documentation</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-24">
          <TerminalDemo />
        </section>

        <section id="features" className="container py-12 md:py-16 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Powerful Features</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              TerminalAI enhances your terminal experience with intelligent features designed for productivity.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6" />}
              title="Prompt Mode"
              description="Convert natural language into terminal commands. Just describe what you want to do."
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6" />}
              title="Auto-Suggestion Mode"
              description="Get intelligent command suggestions as you type based on your command history."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Instant Execution"
              description="Run commands directly after AI generation with a simple confirmation."
            />
            <FeatureCard
              icon={<Command className="h-6 w-6" />}
              title="Command History"
              description="Smart command history that learns from your usage patterns."
            />
            <FeatureCard
              icon={<Code className="h-6 w-6" />}
              title="Enhanced UI"
              description="Beautiful terminal interface with loading indicators and clear feedback."
            />
            <FeatureCard
              icon={<Terminal className="h-6 w-6" />}
              title="Easy Mode Switching"
              description="Seamlessly toggle between prompt and auto-suggestion modes."
            />
          </div>
        </section>

        <section id="how-it-works" className="container py-12 md:py-16 lg:py-24 bg-muted/50 rounded-lg">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">How It Works</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              TerminalAI integrates seamlessly with your existing terminal workflow.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-10 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-2 mt-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Prompt Mode</h3>
              <ol className="space-y-4 mt-4">
                <li className="flex gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-background text-sm font-bold">
                    1
                  </div>
                  <p className="mt-0.5">Type your request in natural language</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-background text-sm font-bold">
                    2
                  </div>
                  <p className="mt-0.5">TerminalAI processes your request using Gemini API</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-background text-sm font-bold">
                    3
                  </div>
                  <p className="mt-0.5">Review the suggested command</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-background text-sm font-bold">
                    4
                  </div>
                  <p className="mt-0.5">Confirm to execute or refine your request</p>
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Auto-Suggestion Mode</h3>
              <ol className="space-y-4 mt-4">
                <li className="flex gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-background text-sm font-bold">
                    1
                  </div>
                  <p className="mt-0.5">Start typing a command in your terminal</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-background text-sm font-bold">
                    2
                  </div>
                  <p className="mt-0.5">TerminalAI suggests completions from your command pool</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-background text-sm font-bold">
                    3
                  </div>
                  <p className="mt-0.5">Press Tab to auto-complete the suggestion</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-background text-sm font-bold">
                    4
                  </div>
                  <p className="mt-0.5">Execute the command as normal</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Boost Your Terminal Productivity
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join thousands of developers who have transformed their terminal workflow.
            </p>
            <Button size="lg" className="mt-4" asChild>
              <Link href="#install">
                Install TerminalAI Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="install" className="container py-12 md:py-16 lg:py-24 bg-muted/50 rounded-lg">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Installation</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Get started with TerminalAI in seconds.
            </p>
          </div>
          <div className="mx-auto max-w-[58rem] mt-8">
            <InstallCommand
              command="curl -o genscript.sh http://genscript.deploylite.tech/genscript.sh"
              description="One-line installation for macOS and Linux"
            />
            <div className="mt-6">
              <InstallCommand
                command="chmod +x genscript.sh"
                description="Make the script executable"
              />
            </div>
            <div className="mt-6">
              <InstallCommand
                command="./genscript.sh"
                description="Run the installation script"
                
              />
            </div>
          </div>
        </section>

        <section id="docs" className="container py-12 md:py-16 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Documentation</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to get started with TerminalAI.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-2 lg:gap-8 mt-8">
            <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
              <h3 className="text-xl font-bold">Quick Start Guide</h3>
              <p className="mt-2 text-muted-foreground">Get up and running with TerminalAI in minutes.</p>
              <Link href="/docs/quick-start" className="absolute inset-0 rounded-lg" aria-hidden="true" />
            </div>
            <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
              <h3 className="text-xl font-bold">Configuration</h3>
              <p className="mt-2 text-muted-foreground">Learn how to customize TerminalAI to fit your workflow.</p>
              <Link href="/docs/configuration" className="absolute inset-0 rounded-lg" aria-hidden="true" />
            </div>
            <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
              <h3 className="text-xl font-bold">Command Reference</h3>
              <p className="mt-2 text-muted-foreground">Explore all available commands and options.</p>
              <Link href="/docs/commands" className="absolute inset-0 rounded-lg" aria-hidden="true" />
            </div>
            <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
              <h3 className="text-xl font-bold">API Documentation</h3>
              <p className="mt-2 text-muted-foreground">Integrate TerminalAI with your own tools and scripts.</p>
              <Link href="/docs/api" className="absolute inset-0 rounded-lg" aria-hidden="true" />
            </div>
          </div>
          <div className="mx-auto flex max-w-[58rem] items-center justify-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/Nyayabrata01/GenScript">
                View Full Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 px-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Terminal className="h-6 w-6" />
            <p className="text-center text-sm leading-loose md:text-left">© 2025 GenScript. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link
              href="https://github.com/Nyayabrata01/GenScript"
              className="text-sm text-muted-foreground underline underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

