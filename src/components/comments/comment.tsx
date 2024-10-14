import ghost from '@assets/ghost.svg';
import anonimus from '@assets/anonimus.svg';
import user from '@assets/user.svg';
import { MdGroups } from 'react-icons/md';

import DropDown from '@components/dropDown';
import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import CardComment from './cardComment';
import Hover from '@components/hoverComponent';

type CommentCategory = 'criticism' | 'praise' | 'comment' | 'tip' | 'advice' | 'all';

interface Data {
  geral: Geral;
  comments: Comment[];
}

interface Geral {
  knowns: number;
  anonimus: number;
  geral: number;
}

interface Comment {
  anonimus: boolean;
  name?: string;
  userName?: string;
  role: string[];
  feedbacks: Feedback[];
}

interface Feedback {
  category: CommentCategory;
  likes: number;
  deslikes: number;
  Message: string;
  fouderResponse?: FoundrResponse;
}

interface FoundrResponse {
  name: string;
  userName: string;
  Message: string;
  role: string[];
}

interface OptionsSelected {
  all: boolean;
  criticism: boolean;
  praise: boolean;
  comment: boolean;
  tip: boolean;
  advice: boolean;
}

interface OptionsToSelect {
  all: string;
  criticism: string;
  praise: string;
  comment: string;
  tip: string;
  advice: string;
}

interface OptionsConter {
  all: Number;
  criticism: Number;
  praise: Number;
  comment: Number;
  tip: Number;
  advice: Number;
}

interface Item {
  key: CommentCategory;
  value: string;
}

export default function CommentsComponent({ geral, comments }: Data) {
  const [contAllComents, setcontAllComents] = useState<number>(0);
  const [contSelectedComents, setContSelectedComents] = useState<number>(0);
  const filterOptions: Item[] = [
    { key: 'all', value: 'Todos' },
    { key: 'criticism', value: 'Crítica' },
    { key: 'praise', value: 'Elogio' },
    { key: 'comment', value: 'Comentário' },
    { key: 'tip', value: 'Dica' },
    { key: 'advice', value: 'Conselho' },
  ];

  const initialSelectedItem = filterOptions.find((option) => option.key === 'all') || {
    key: 'all',
    value: 'Todos',
  };

  const [selected, setSelected] = useState<Item>({
    key: initialSelectedItem.key,
    value: initialSelectedItem.value,
  });

  const filterBy = (list: Comment[], category: string): Comment[] => {
    if (category === 'all') {
      return comments;
    }
    return list
      .map((comment) => {
        const filteredFeedbacks = comment.feedbacks.filter((feedback) => feedback.category === category);

        if (filteredFeedbacks.length > 0) {
          return {
            ...comment,
            feedbacks: filteredFeedbacks,
          };
        }
        return null;
      })
      .filter((comment) => comment !== null) as Comment[];
  };

  const [itens, setItens] = useState<Comment[]>(filterBy(comments, selected.key));

  useEffect(() => {
    let allComments: number = 0;
    comments.map((item, key) => item.feedbacks.map((item2, key) => allComments++));
    setcontAllComents(allComments);
    const itens = filterBy(comments, selected.key);
    setItens(itens);
    let contSelected: number = 0;
    itens.map((item, key) => item.feedbacks.map(() => contSelected++));
    setContSelectedComents(contSelected);
  }, [selected]);

  return (
    <div className="flex flex-col items-center gap-4 min-h-screen">
      <div className="flex gap-8">
        <Hover message="Visitantes identificados">
          <div className="flex gap-1">
            <img src={user} />
            <p>{geral.knowns}</p>
          </div>
        </Hover>
        <Hover message="Visitantes anônimos">
          <div className="flex gap-1">
            <img src={anonimus} />
            <p>{geral.anonimus}</p>
          </div>
        </Hover>
        <Hover message="Total de visitantes">
          <div className="flex gap-1">
            <MdGroups size={30} />
            <p>{geral.geral}</p>
          </div>
        </Hover>
        <Hover message="Ghosts">
          <div className="flex gap-1">
            <img src={ghost} />
            <p className="">?</p>
          </div>
        </Hover>
      </div>
      <div className="flex gap-3">
        <p>Filtrar por</p>
        <DropDown
          iconClosed={<ArrowDown />}
          iconOpen={<ArrowUp />}
          selected={selected}
          setSelected={setSelected}
          itens={filterOptions}
          defaultItem={selected}
          style="bg-blue-300 hover:bg-blue-500"
        />

        <div className="flex ">
          <p>({contSelectedComents}/</p>
          <p>{contAllComents})</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {itens.map((value, key) => (
          <div className="flex flex-col gap-4" key={key}>
            {value.feedbacks.map((iten2, key2) => (
              <CardComment comment={iten2} user={value} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
