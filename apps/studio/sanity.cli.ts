import 'dotenv/config'
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.VITE_SANITY_PROJECT_ID!,
    dataset: process.env.VITE_SANITY_DATASET!,
  },
  deployment: {
    autoUpdates: true,
  },
})
