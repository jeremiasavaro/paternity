import { Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6 mt-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Paternity © 2026 - FC26 Matches History</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Ayuda
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacidad
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Términos
          </a>
        </div>
      </div>
    </footer>
  )
};
