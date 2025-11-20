export interface TrackedApp {
  gameId: number;
  gameName: string;
  gameRoute: string;
  gameIcon: string;
  gameImage: string;
  gameShortcode: string;
  forecastCreated: boolean;
  timestamp: string; // ISO date
}

const STORAGE_KEY = "recentApps";

export class RecentAppTracker {
  static getRecentApps(): TrackedApp[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as TrackedApp[] : [];
  }

  static markAppOpened(app: {
    gameId: number;
    gameName: string;
    gameRoute: string;
    gameIcon: string;
    gameImage: string;
    gameShortcode: string;
  }): void {
    const current = this.getRecentApps();

    // Remove any existing instance
    const filtered = current.filter(item => item.gameId !== app.gameId);

    // Add to front
    const newEntry: TrackedApp = {
      ...app,
      forecastCreated: false,
      timestamp: new Date().toISOString()
    };

    const updated = [newEntry, ...filtered];

    // Keep only latest 3
    const trimmed = updated.slice(0, 4);
    // const trimmed = updated.slice(0, 12);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  }

  static markForecastCreated(gameId: number): void {
    const current = this.getRecentApps();
    const updated = current.map(item =>
      item.gameId === gameId
        ? { ...item, forecastCreated: true }
        : item
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  static clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}
