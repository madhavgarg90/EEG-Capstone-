import  PomodoroTimer  from "@/components/pomodoro-timer-old"
import FocusMonitor from "@/components/focus-monitor"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PRESET_STANDARD, PRESET_DEMO } from "@/lib/focus-presets"

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Focus Time</h1>
        <p className="text-muted-foreground">Use the Pomodoro technique to boost your productivity</p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pomodoro Timer */}
        <Card className="border-2">
          <CardHeader className="text-center">
            <CardTitle>Pomodoro Timer</CardTitle>
            <CardDescription>Focus for 25 minutes, then take a 5 minute break</CardDescription>
          </CardHeader>
          <CardContent>
            <PomodoroTimer />
          </CardContent>
        </Card>

        {/* Focus Monitor */}
        <Card className="border-2">
          <CardHeader className="text-center">
            <CardTitle>Focus Monitor</CardTitle>
            <CardDescription>Track your focus levels in real-time</CardDescription>
          </CardHeader>
          <CardContent>
            <FocusMonitor config={PRESET_DEMO} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
