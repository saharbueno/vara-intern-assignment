// db.mjs
import mongoose from 'mongoose';

// schema for contacts and their messages
const Contact = new mongoose.Schema({
    name: {required: true, type: String},
    email: {required: true, type: String},
    message: {required: true, type: String},
});

// schema for users and cookies
const UserCookie = new mongoose.Schema({
    sessionId: {required: true, type: String},
    userName: {required: true, type: String},
});

// schema for projects
const Projects = new mongoose.Schema({
    title: {required: true, type: String},
    tech: {required: true, type: String},
    image: {required: true, type: String},
});

// instantiate the model
mongoose.model('Contact', Contact);
mongoose.model('UserCookie', UserCookie);
mongoose.model('Projects', Projects);

// connect to mongoose
mongoose.connect(process.env.DSN).then(() => {
    console.log('Connected to MongoDB');

    // function to initialize projects
    async function initializeProjects() {
      try {
        // check if projects already exist in the database
        const count = await mongoose.model('Projects').countDocuments();
        if (count === 0) {
          // insert projects
          const projs = [
            { title: 'fin-friend', tech: 'html ᰔᩚ css ᰔᩚ javascript', image: '/assets/fin-friend.png' },
            { title: 'fish frenzy', tech: 'html ᰔᩚ css ᰔᩚ p5.js', image: '/assets/fish-frenzy.png' },
            { title: 'breakout!', tech: 'html ᰔᩚ css ᰔᩚ p5.js', image: '/assets/breakout.png'},
            { title: 'to-do list', tech: 'htlm ᰔᩚ css ᰔᩚ javascript', image: '/assets/to-do-list.png'},
            { title: 'bts album quiz', tech: 'html ᰔᩚ css ᰔᩚ php', image: '/assets/bts-quiz.png'},
            { title: 'valorant ar game', tech: 'html ᰔᩚ css ᰔᩚ p5.js', image: '/assets/val-ar.png'},
            { title: 'an intro to loona', tech: 'html ᰔᩚ css ᰔᩚ javascript', image: '/assets/loona-website.png'},
          ];
          // insert the projects into the db
          await mongoose.model('Projects').insertMany(projs);
          console.log('Projects initialized successfully.');
        } else {
          console.log('Projects already initialized.');
        }
      } catch (error) {
        console.error('Error initializing projects:', error);
      }
    }

    // initialize projects when app starts
    initializeProjects();
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));


export {Contact, UserCookie, Projects};