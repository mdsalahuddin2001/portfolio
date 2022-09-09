import { ReactComponent as JsIcon } from '../assets/icons/js.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import { ReactComponent as ReduxIcon } from '../assets/icons/redux.svg';
import { ReactComponent as TailwindIcon } from '../assets/icons/tailwind.svg';
import { ReactComponent as NodeIcon } from '../assets/icons/node.svg';
import { ReactComponent as ExpressIcon } from '../assets/icons/express.svg';
import { ReactComponent as MongoIcon } from '../assets/icons/mongo.svg';
import { ReactComponent as NextIcon } from '../assets/icons/next.svg';
const Skills = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-10 my-8">
        <JsIcon className="w-14" />
        <ReactIcon className="w-14" />
        <TailwindIcon className="w-14" />
        <ReduxIcon className="w-14" />
      </div>
      <div className="flex items-center justify-center space-x-6 my-8 opacity-30">
        <NodeIcon className="w-9" />
        <ExpressIcon className="w-9" />
        <MongoIcon className="w-9" />
        <NextIcon className="w-9" />
      </div>
    </div>
  );
};
export default Skills;
