export interface IAd {
  id: string;
  name: string;
  yearPlaying: number;
  discord: string;
  weekDays: string;
  hoursStart: number;
  hoursEnd: number;
  useVoiceChannel: boolean;
  createdAt: Date;
  userId: string;
  gameId: string;
}

/* id              String   @id @default(uuid())
  name            String
  yearPlaying     Int
  discord         String
  weekDays        String
  hoursStart      Int
  hoursEnd        Int
  useVoiceChannel Boolean
  createdAt       DateTime @default(now())
  userId          String
  gameId          String
*/
