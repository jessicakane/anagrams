import { createContext, useState } from "react";

const MakingWordContext = createContext();

const MakingWordContextProvider = ({children}) => {

    const myDictionary = {
        DEMAND: ['DEMANDS', 'DEMANDED', 'DEMANDING'],
        PREJUDICE: ['PREJUDICED', 'PREJUDICES'],
        CROSS: ['ACROSS', 'CROSSING', 'CROSSED', 'CROSSES'],
        ACROSTIC: ['ACROSTICS'],
        TRAIPSE: ['TRAIPSED', 'TRAIPSING', 'TRAIPSES'],
  
        
        ANSWER: [
              'ANSWERED', 'ANSWERING'
          ],
          BRAND: [
              'BRANDS',
              'BRADED',
              'BRANDING',
              'REBRAND',
              'REBRANDED',
              'REBRANDING'
          ],
          GATE: [
              'GATED', 'GATING'
          ],
          HEIGHT: ['HEIGHTS'],
          THIGH: ['THIGHS'],
          MOAN: [
              'MOANS', 'MOANED', 'MOANING'
          ],
          NOMAD: ['NOMADS'],
          EAT: [
              'EATS', 'ATE', 'EATING', 'EATEN'
          ],
          RUN: [
              'RUNS', 'RAN', 'RUNNING'
          ],
          JUMP: [
              'JUMPS', 'JUMPED', 'JUMPING'
          ],
          TALK: [
              'TALKS', 'TALKED', 'TALKING'
          ],
          PLAY: [
              'PLAYS', 'PLAYED', 'PLAYING'
          ],
          WORK: [
              'WORKS', 'WORKED', 'WORKING'
          ],
          GO: [
              'GOES', 'WENT', 'GOING'
          ],
          SEE: [
              'SEES', 'SAW', 'SEEING'
          ],
          TAKE: [
              'TAKES', 'TOOK', 'TAKING', 'TAKEN'
          ],
          GIVE: [
              'GIVES', 'GAVE', 'GIVING', 'GIVEN'
          ],
          HAVE: [
              'HAS', 'HAD', 'HAVING'
          ],
          DO: [
              'DOES', 'DID', 'DOING', 'DONE'
          ],
          SAY: [
              'SAYS', 'SAID', 'SAYING'
          ],
          GET: [
              'GETS', 'GOT', 'GETTING', 'GOTTEN'
          ],
          MAKE: [
              'MAKES', 'MADE', 'MAKING'
          ],
          KNOW: [
              'KNOWS', 'KNEW', 'KNOWING', 'KNOWN'
          ],
          THINK: [
              'THINKS', 'THOUGHT', 'THINKING'
          ],
          WANT: [
              'WANTS', 'WANTED', 'WANTING'
          ],
          NEED: [
              'NEEDS', 'NEEDED', 'NEEDING'
          ],
          LIKE: [
              'LIKES', 'LIKED', 'LIKING'
          ],
          LOVE: [
              'LOVES', 'LOVED', 'LOVING'
          ],
          BELIEVE: [
              'BELIEVES', 'BELIEVED', 'BELIEVING'
          ],
          FEEL: [
              'FEELS', 'FELT', 'FEELING'
          ],
          SEE: [
              'SEES', 'SAW', 'SEEING', 'SEEN'
          ],
          GIVE: [
              'GIVES', 'GAVE', 'GIVING', 'GIVEN'
          ],
          CALL: [
              'CALLS', 'CALLED', 'CALLING'
          ],
          ASK: [
              'ASKS', 'ASKED', 'ASKING'
          ],
          TELL: [
              'TELLS', 'TOLD', 'TELLING', 'RETELL', 'RETELLING'
          ],
          TRY: [
              'TRIES', 'TRIED', 'TRYING', 'RETRY', 'RETRYING', 'RETRIED', 'RETRIES'
          ],
          BECOME: [
              'BECOMES', 'BECAME', 'BECOMING'
          ],
          LEAVE: [
              'LEAVES', 'LEFT', 'LEAVING'
          ],
          GET: [
              'GETS', 'GOT', 'GETTING', 'GOTTEN'
          ],
          PUT: [
              'PUTS', 'PUT', 'PUTTING'
          ],
          MEAN: [
              'MEANS', 'MEANT', 'MEANING'
          ],
          KEEP: [
              'KEEPS', 'KEPT', 'KEEPING'
          ],
          LET: [
              'LETS', 'LET', 'LETTING'
          ],
          BEGIN: [
              'BEGINS', 'BEGAN', 'BEGINNING'
          ],
          SEEM: [
              'SEEMS', 'SEEMED', 'SEEMING'
          ],
          HELP: [
              'HELPS', 'HELPED', 'HELPING', 'HELPER'
          ],
          SHOW: [
              'SHOWS', 'SHOWED', 'SHOWING'
          ],
          HEAR: [
              'HEARS', 'HEARD', 'HEARING'
          ],
          PLAY: [
              'PLAYS', 'PLAYED', 'PLAYING', 'REPLAY', 'PLAYER', 'PLAYERS'
          ],
          RUN: [
              'RUNS', 'RAN', 'RUNNING', 'RERUN', 'RERUNS'
          ],
          WALK: [
              'WALKS', 'WALKED', 'WALKING', 'WALKER', 'WALKERS'
          ],
          SIT: [
              'SITS', 'SAT', 'SITTING', 'SITTER', 'SITTERS'
          ],
          STAND: [
              'STANDS', 'STOOD', 'STANDING'
          ],
          LIE: [
              'LIES', 'LAY', 'LYING', 'LIAR'
          ],
          SLEEP: [
              'SLEEPS', 'SLEPT', 'SLEEPING', 'ASLEEP'
          ],
          WAKE: [
              'WAKES', 'WOKE', 'WAKING', 'WOKEN', 'AWAKE'
          ],
          OPEN: [
              'OPENS', 'OPENED', 'OPENING', 'REOPEN', 'REOPENS', 'REOPENING'
          ],
          CLOSE: [
              'CLOSES', 'CLOSED', 'CLOSING', 'CLOSER'
          ],
          RIDE: [
              'RIDES', 'RODE', 'RIDING', 'OVERRIDE', 'OVERRIDES'
          ],
          DRIVE: [
              'DRIVES', 'DROVE', 'DRIVING', 'DRIVER', 'DRIVERS'
          ],
          SWIM: [
              'SWIMS', 'SWAM', 'SWIMMING', 'SWIMMER', 'SWIMMERS'
          ],
          FLY: [
              'FLIES', 'FLEW', 'FLYING', 'FLYER', 'FLYERS'
          ],
          WRITE: [
              'WRITES', 'WROTE', 'WRITING', 'REWRITE', 'REWRITES'
          ],
          DRAW: [
              'DRAWS', 'DREW', 'DRAWING'
          ],
          SING: [
              'SINGS', 'SANG', 'SINGING', 'SINGER', 'SINGERS'
          ],
          DANCE: [
              'DANCES', 'DANCED', 'DANCING', 'DANCER', 'DANCERS'
          ],
          COOK: [
              'COOKS', 'COOKED', 'COOKING'
          ],
          EAT: [
              'EATS', 'ATE', 'EATING', 'EATEN', 'EATER', 'EATERS'
          ],
          DRINK: [
              'DRINKS', 'DRANK', 'DRINKING', 'DRUNK', 'DRINKER', 'DRINKERS'
          ],
          HEAR: [
              'HEARS', 'HEARD', 'HEARING'
          ],
          FEEL: [
              'FEELS', 'FELT', 'FEELING', 'FEELER', 'FEELERS'
          ],
          SMELL: [
              'SMELLS', 'SMELLED', 'SMELLING'
          ],
          TASTE: [
              'TASTES', 'TASTED', 'TASTING', 'TASTER', 'TASTERS'
          ],
          TOUCH: [
              'TOUCHES', 'TOUCHED', 'TOUCHING'
          ],
          GO: [
              'GOES', 'WENT', 'GOING'
          ],
          COME: [
              'COMES', 'CAME', 'COMING'
          ],
          DO: [
              'DOES', 'DID', 'DOING', 'DONE', 'DOER', 'DOERS', 'REDO', 'REDID', 'REDOES', 'REDOING'
          ],
          HAVE: [
              'HAS', 'HAD', 'HAVING'
          ],
          CAN: [
              'CAN', 'COULD', 'CANNED', 'CANS'
          ],
          WILL: [
              'WILL', 'WOULD', 'WILLED'
          ],
          MAY: [
              'MAY', 'MIGHT'
          ],
          SHALL: [
              'SHALL', 'SHOULD'
          ],
          RUN: [
              'RUN', 'RUNS', 'RUNNING', 'RAN'
          ],
          SEE: [
              'SEE',
              'SEES',
              'SEEING',
              'SAW',
              'SEEN',
              'SEER', 
              'SEERS'
          ],
          BE: [
              'BE',
              'IS',
              'WAS',
              'BEING',
              'BEEN'
          ],
          HAVE: [
              'HAVE', 'HAS', 'HAD', 'HAVING'
          ],
          SAY: [
              'SAY', 'SAYS', 'SAID', 'SAYING'
          ],
          GET: [
              'GET', 'GETS', 'GOT', 'GETTING'
          ],
          MAKE: [
              'MAKE', 'MAKES', 'MADE', 'MAKING'
          ],
          KNOW: [
              'KNOW',
              'KNOWS',
              'KNEW',
              'KNOWING',
              'KNOWN'
          ],
          TAKE: [
              'TAKE',
              'TAKES',
              'TOOK',
              'TAKING',
              'TAKEN',
              'RETAKE',
              'RETAKES'
          ],
          THINK: [
              'THINK', 'THINKS', 'THOUGHT', 'THINKING', 'RETHINK', 'RETHINKS'
          ],
          LOOK: [
              'LOOK', 'LOOKS', 'LOOKED', 'LOOKING'
          ],
          WANT: [
              'WANT', 'WANTS', 'WANTED', 'WANTING'
          ],
          GIVE: [
              'GIVE', 'GIVES', 'GAVE', 'GIVING'
          ],
          USE: [
              'USE', 'USES', 'USED', 'USING', 'REUSE', 'REUSES'
          ],
          FIND: [
              'FIND', 'FINDS', 'FOUND', 'FINDING', 'FOUNDER', 'FOUNDERS', 'FINDER'
          ],
          ASK: [
              'ASK', 'ASKS', 'ASKED', 'ASKING'
          ],
          WORK: [
              'WORK', 'WORKS', 'WORKED', 'WORKING', 'REWORK', 'REWORKS', 'WORKER', 'WORKERS'
          ],
          SEEM: [
              'SEEM', 'SEEMS', 'SEEMED', 'SEEMING'
          ],
          SHOW: [
              'SHOW', 'SHOWS', 'SHOWED', 'SHOWING'
          ],
          LET: [
              'LET', 'LETS', 'LETTING'
          ],
          LEAVE: [
              'LEAVE', 'LEAVES', 'LEFT', 'LEAVING'
          ],
          BRING: [
              'BRING', 'BRINGS', 'BROUGHT', 'BRINGING'
          ],
          BUILD: [
              'BUILD', 'BUILDS', 'BUILT', 'BUILDING', 'REBUILD', 'REBUILDS','REBUILDING'
          ],
          BLAME: ['BLAMES', 'BLAMING', 'BLAMED'],
          BUY: [
              'BUY', 'BUYS', 'BOUGHT', 'BUYING', 'BUYER', 'BUYERS'
          ],
          CATCH: [
              'CATCH', 'CATCHES', 'CAUGHT', 'CATCHING', 'CATCHER'
          ],
          CHOOSE: [
              'CHOOSE', 'CHOOSES', 'CHOSE', 'CHOOSING'
          ],
          COST: [
              'COST', 'COSTS', 'COSTING', 'COSTLY'
          ],
          COUNT: ['COUNTS', 'COUNTED', 'COUNTER', 'COUNTING', 'COUNTERS'],
          DREAM: [
              'DREAM',
              'DREAMS',
              'DREAMED',
              'DREAMT',
              'DREAMING',
              'DREAMT',
              'DREAMER',
              'DREAMERS'
          ],
          DRINK: [
              'DRINK', 'DRINKS', 'DRANK', 'DRINKING', 'DRINKER', 'DRINKERS'
          ],
          DEGRADE: ['DEGRADES', 'DEGRADING', 'DEGRADED'],
          FALL: [
              'FALL', 'FALLS', 'FELL', 'FALLING', 'FALLEN'
          ],
          FEED: [
              'FEED', 'FEEDS', 'FED', 'FEEDING', 'FEEDER'
          ],
          FIGHT: [
              'FIGHT', 'FIGHTS', 'FOUGHT', 'FIGHTING', 'FIGHTER', 'FIGHTERS'
          ],
          FORGET: [
              'FORGET', 'FORGETS', 'FORGOT', 'FORGETTING', 'FORGOTTEN'
          ],
          FORGIVE: [
              'FORGIVE',
              'FORGIVES',
              'FORGAVE',
              'FORGIVEN',
              'FORGIVING'
          ],
          FREEZE: [
              'FREEZE',
              'FREEZES',
              'FROZE',
              'FROZEN',
              'FREEZING',
              'FREEZER',
              'FREEZERS'
          ],
          GROW: [
              'GROW',
              'GROWS',
              'GREW',
              'GROWN',
              'GROWING',
              'GROWTH'
          ],
          GRADE: ['GRADED', 'GRADES', 'GRADER'],
          HANG: [
              'HANG', 'HANGS', 'HUNG', 'HANGING', 'HANGER', 'HANGERS'
          ],
          HAVE: [
              'HAVE', 'HAS', 'HAD', 'HAVING'
          ],
          HEAR: [
              'HEAR', 'HEARS', 'HEARD', 'HEARING', 'HEARINGS'
          ],
          HIDE: [
              'HIDE',
              'HIDES',
              'HID',
              'HIDDEN',
              'HIDING'
          ],
          HIT: [
              'HIT', 'HITS', 'HITTING'
          ],
          HOLD: [
              'HOLD', 'HOLDS', 'HELD', 'HOLDING', 'HOLDER', 'HOLDERS'
          ],
          HURT: [
              'HURT', 'HURTS', 'HURTING'
          ],
          KEEP: [
              'KEEP', 'KEEPS', 'KEPT', 'KEEPING', 'KEEPER', 'KEEPERS'
          ],
          KNEEL: [
              'KNEEL', 'KNEELS', 'KNELT', 'KNEELING'
          ],
          LAY: [
              'LAY', 'LAYS', 'LAID', 'LAYING'
          ],
          LEAD: [
              'LEAD', 'LEADS', 'LED', 'LEADING', 'LEADER', 'LEADERS'
          ],
          LEAN: [
              'LEAN',
              'LEANS',
              'LEANED',
              'LEANT',
              'LEANING'
          ],
          LEAP: [
              'LEAP',
              'LEAPS',
              'LEAPED',
              'LEAPT',
              'LEAPING'
          ],
          LEARN: [
              'LEARN',
              'LEARNS',
              'LEARNED',
              'LEARNT',
              'LEARNING',
              'RELEARN',
              'RELEARNS',
              'LEARNER',
              'LEARNERS'
          ],
          LEND: [
              'LEND', 'LENDS', 'LENT', 'LENDING'
          ],
          LIGHT: [
              'LIGHT', 'LIGHTS', 'LIT', 'LIGHTING', 'LIGHTER', 'LIGHTERS'
          ],
          LOSE: [
              'LOSE', 'LOSES', 'LOST', 'LOSING', 'LOSER', 'LOSERS'
          ],
          MAKE: [
              'MAKE', 'MAKES', 'MADE', 'MAKING', 'REMAKE', 'REMAKES', 'MAKER', 'MAKERS'
          ],
          MEAN: [
              'MEAN', 'MEANS', 'MEANT', 'MEANING'
          ],
          MEET: [
              'MEET', 'MEETS', 'MET', 'MEETING'
          ],
          PAY: [
              'PAY', 'PAYS', 'PAID', 'PAYING', 'PREPAY', 'PREPAYS', 'PREPAYING'
          ],
          PUT: [
              'PUT', 'PUTS', 'PUTTING'
          ],
          READ: [
              'READ', 'READS', 'READING', 'REREADS', 'REREADING', 'REREAD', 'PROOFREAD', 'PROOFREADING'
          ],
          BALLOON: ['BALLOONS', 'BALLOONED'],
          MAROON: ['MAROONS', 'MAROONED'],
          STAIR: ['STAIRS', 'STAIRWAYS', 'STAIRWAY'],
          RING: [
              'RING',
              'RINGS',
              'RANG',
              'RUNG',
              'RINGING',
              'RINGER',
              'RINGERS'
          ],
          RISE: [
              'RISE',
              'RISES',
              'ROSE',
              'RISEN',
              'RISING',
              'ARISE',
              'ARISING',
              'AROSE'
          ],
          RUN: [
              'RUN', 'RUNS', 'RAN', 'RUNNING', 'RUNNER', 'RUNNERS'
          ],
          SAY: [
              'SAY', 'SAYS', 'SAID', 'SAYING'
          ],
          SEEK: [
              'SEEK', 'SEEKS', 'SOUGHT', 'SEEKING', 'SEEKER', 'SEEKERS'
          ],
          SELL: [
              'SELL', 'SELLS', 'SOLD', 'SELLING', 'RESELL', 'SALES', 'SALE'
          ],
          SEND: [
              'SEND', 'SENDS', 'SENT', 'SENDING', 'RESEND', 'RESENDS'
          ],
          SET: [
              'SET', 'SETS', 'SETTING', 'SETTINGS'
          ],
          SHAKE: [
              'SHAKE',
              'SHAKES',
              'SHOOK',
              'SHAKEN',
              'SHAKING',
              'SHAKER',
              'SHAKERS'
          ],
          SHINE: [
              'SHINE', 'SHINES', 'SHONE', 'SHINING', 'SHINER', 'SHINERS'
          ],
          SHOOT: [
              'SHOOT', 'SHOOTS', 'SHOT', 'SHOOTING'
          ],
          SHOW: [
              'SHOW',
              'SHOWS',
              'SHOWED',
              'SHOWN',
              'SHOWING'
          ],
          SHUT: [
              'SHUT', 'SHUTS', 'SHUTTING'
          ],
          SINK: [
              'SINK',
              'SINKS',
              'SANK',
              'SUNK',
              'SINKING'
          ],
          SIT: [
              'SIT', 'SITS', 'SAT', 'SITTING'
          ],
          SLEEP: [
              'SLEEP', 'SLEEPS', 'SLEPT', 'SLEEPING'
          ],
          SLIDE: [
              'SLIDE', 'SLIDES', 'SLID', 'SLIDING'
          ],
          SMELL: [
              'SMELL',
              'SMELLS',
              'SMELLED',
              'SMELT',
              'SMELLING'
          ],
          SPEAK: [
              'SPEAK',
              'SPEAKS',
              'SPOKE',
              'SPOKEN',
              'SPEAKING'
          ],
          SPELL: [
              'SPELL',
              'SPELLS',
              'SPELLED',
              'SPELLT',
              'SPELLING'
          ],
          SPEND: [
              'SPEND', 'SPENDS', 'SPENT', 'SPENDING'
          ],
          SPILL: [
              'SPILL',
              'SPILLS',
              'SPILLED',
              'SPILT',
              'SPILLING'
          ],
          SPIN: [
              'SPIN', 'SPINS', 'SPUN', 'SPINNING'
          ],
          SPIT: [
              'SPIT', 'SPITS', 'SPAT', 'SPITTING'
          ],
          SPLIT: [
              'SPLIT', 'SPLITS', 'SPLITTING'
          ],
          SPOIL: [
              'SPOIL',
              'SPOILS',
              'SPOILED',
              'SPOILT',
              'SPOILING'
          ],
          SPREAD: [
              'SPREAD', 'SPREADS', 'SPREADING'
          ],
          SPRING: [
              'SPRING',
              'SPRINGS',
              'SPRANG',
              'SPRUNG',
              'SPRINGING'
          ],
          STAND: [
              'STAND', 'STANDS', 'STOOD', 'STANDING'
          ],
          STEAL: [
              'STEAL',
              'STEALS',
              'STOLE',
              'STOLEN',
              'STEALING'
          ],
          STICK: [
              'STICK', 'STICKS', 'STUCK', 'STICKING'
          ],
          STING: [
              'STING', 'STINGS', 'STUNG', 'STINGING'
          ],
          STINK: [
              'STINK',
              'STINKS',
              'STANK',
              'STUNK',
              'STINKING'
          ],
          STRIKE: [
              'STRIKE',
              'STRIKES',
              'STRUCK',
              'STRICKEN',
              'STRIKING'
          ],
          SWEAR: [
              'SWEAR',
              'SWEARS',
              'SWORE',
              'SWORN',
              'SWEARING'
          ],
          SWEEP: [
              'SWEEP', 'SWEEPS', 'SWEPT', 'SWEEPING'
          ],
          SWIM: [
              'SWIM',
              'SWIMS',
              'SWAM',
              'SWUM',
              'SWIMMING'
          ],
          SWING: [
              'SWING', 'SWINGS', 'SWUNG', 'SWINGING'
          ],
          TAKE: [
              'TAKE', 'TAKES', 'TOOK', 'TAKING'
          ],
          TEACH: [
              'TEACH', 'TEACHES', 'TAUGHT', 'TEACHING'
          ],
          TEAR: [
              'TEAR',
              'TEARS',
              'TORE',
              'TORN',
              'TEARING'
          ],
          THROW: [
              'THROW',
              'THROWS',
              'THREW',
              'THROWN',
              'THROWING'
          ],
          THROUGH: ['THROUGHOUT'],
          MOUNT: ['MOUNTAIN'],
          EXPIRE: ['EXPIRES', 'EXPIRED', 'EXPIRATION', 'EXPIRING'],
          UNDERSTAND: [
              'UNDERSTAND', 'UNDERSTANDS', 'UNDERSTOOD', 'UNDERSTANDING'
          ],
          WAKE: [
              'WAKE', 'WAKES', 'WOKE', 'WAKING'
          ],
          WEAR: [
              'WEAR',
              'WEARS',
              'WORE',
              'WORN',
              'WEARING'
          ],
          WEEP: [
              'WEEP', 'WEEPS', 'WEPT', 'WEEPING'
          ],
          WIN: [
              'WIN', 'WINS', 'WON', 'WINNING', 'WINNER', 'WINNERS'
          ],
          WIND: [
              'WIND', 'WINDS', 'WOUND', 'WINDING'
          ],
          WITHDRAW: [
              'WITHDRAW',
              'WITHDRAWS',
              'WITHDREW',
              'WITHDRAWN',
              'WITHDRAWING'
          ],
          WAIT: ['WAITS', 'WAITING', 'WAITED', 'WAITER', 'WAITERS', 'WAITERED', 'WAITERING', 'AWAIT', 'AWAITS', 'AWAITING'],
          WIFE: ['WIVES']
  
      }

    const [yourBoard, setYourBoard] = useState([]);
    const [wordIndex, setWordIndex] = useState('a');
    const [myWords, setMyWords] = useState([]);
    const [myWordsReference, setMyWordsReference] = useState([]);
    const [rootWord, setRootWord] = useState('');

    const addLetterToBoard = (letter) => {
        const letterObj = {
            value: letter,
            fromMiddle: true
        };
        const updatedBoard = [
            ...yourBoard,
            letterObj
        ];
        setYourBoard(updatedBoard);
    }

    const checkBoardStatus = () => {
        if (yourBoard.length === 1) {
            setWordIndex('a');
           
        }
    }

    const deleteWordLetter = (index1, index2) => {
        if (isNaN(wordIndex)) {

            setWordIndex(index1);
            const letterObj = {
                value: myWords[index1][index2],
                fromMiddle: false,
                index1: index1,
                index2: index2
            };
            const updatedBoard = [
                ...yourBoard,
                letterObj
            ];
            setYourBoard(updatedBoard);
            const newWord = myWords[index1];
            newWord[index2] = '';
            const updatedWords = [...myWords];
            updatedWords[index1] = newWord;
            setMyWords(updatedWords)
        } else if (wordIndex === index1) {
            const letterObj = {
                value: myWords[index1][index2],
                fromMiddle: false,
                index1: index1,
                index2: index2
            };
            const updatedBoard = [
                ...yourBoard,
                letterObj
            ];
            setYourBoard(updatedBoard);
            const newWord = myWords[index1];
            newWord[index2] = '';
            const updatedWords = [...myWords];
            updatedWords[index1] = newWord;
            setMyWords(updatedWords);
        } else {
            return null
        }
    }

    const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';


  return (
    <MakingWordContext.Provider value = {{yourBoard, setYourBoard, wordIndex, setWordIndex, myWords, setMyWords, addLetterToBoard, checkBoardStatus, deleteWordLetter, checkBoardStatus, myDictionary, myWordsReference, setMyWordsReference, apiUrl}}>
        {children}
    </MakingWordContext.Provider>
  )
}

export {MakingWordContext};
export default MakingWordContextProvider;
