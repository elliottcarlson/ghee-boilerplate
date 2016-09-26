import dotenv from 'dotenv';
import { Ghee, ghee } from 'ghee';

dotenv.config({ silent: true });

const token = process.env.SLACK_API_TOKEN || '';

class Bot extends Ghee {
  constructor(token) {
    super(token);
  }

  /**
   * Enter your bots methods here.
   */
}

var bot = new Bot(token);
