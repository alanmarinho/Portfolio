import founderResponseIcon from '@assets/founderResponse.svg';
import founder from '@assets/founder.svg';
import { MdVerified } from 'react-icons/md';
import { AiOutlineLike, AiFillLike, AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import Anonimus from '@components/anonimus';
import { useEffect, useState } from 'react';
import { useInfo } from '@contexts/info';
import Hover from '@components/hoverComponent';

type CommentCategory = 'criticism' | 'praise' | 'comment' | 'tip' | 'advice' | 'all';

export interface CardCommentInterface {
  user: User;
  comment: Comment;
}

interface User {
  name?: string;
  userName?: string;
  role: string[];
}

interface Comment {
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

export default function CardComment({ comment, user }: CardCommentInterface) {
  const { myInfo } = useInfo();
  const [founderResponseOpen, setFounderResponseOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setFounderResponseOpen((prev) => !prev);
  };

  function getInitials(name: string): string {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }
  const categoryColors = {
    criticism: 'bg-red-500',
    praise: 'bg-green-400',
    comment: 'bg-blue-400',
    tip: 'bg-purple-400',
    advice: 'bg-yellow-300',
    default: 'bg-gray-300',
    all: '',
  };

  const categorys = {
    all: '',
    criticism: 'Crítica',
    praise: 'Elogio',
    comment: 'Comentário',
    tip: 'Dica',
    advice: 'Consenho',
  };
  return (
    <div>
      <div className="flex flex-col flex-wrap gap-2 bg-slate-300 p-2 rounded-md justify-between">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="flex text-white items-center justify-center bg-zinc-600 min-h-14 min-w-14 rounded-full">
              {!!user.name ? <p>{getInitials(user.name)}</p> : <Anonimus color="#fff" />}
            </div>
            <div>
              <p>{!!user.name ? user.name : 'Anônimo'}</p>
              <p className="text-sm text-zinc-500">@{!!user.userName ? user.userName : '*****'}</p>
            </div>
          </div>
          {user.role.length > 0 && !user.role.includes('') && (
            <div className="flex gap-1">
              {user.role.map((item, key) => (
                <div key={key}>
                  <Hover message="Verificado">
                    <div key={key}>{item == 'checked' && <MdVerified color="#4768ED" />}</div>
                  </Hover>
                  <Hover message="Fundador">
                    <div key={key}>{item == 'founder' && <img className="w-4" src={founder} alt="founder " />}</div>
                  </Hover>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="p-3">{comment.Message}</div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3 pl-8">
            <div className="hover:cursor-pointer flex items-center gap-2">
              <Hover message="Likes">
                <AiOutlineLike />
              </Hover>
              <p>{comment.likes}</p>
            </div>
            <div className="hover:cursor-pointer flex items-center gap-2">
              <Hover message="Deslikes">
                <AiOutlineDislike />
              </Hover>
              <p>{comment.deslikes}</p>
            </div>
            {!!comment.fouderResponse && (
              <Hover message="Resposta do fundador">
                <div className="hover:cursor-pointer" onClick={() => handleToggle()}>
                  <img className="w-5" src={founderResponseIcon} alt={'founderResponse'} />
                </div>
              </Hover>
            )}
          </div>
          <Hover message={`Categoria ${categorys[comment.category]}`}>
            <div className={`${categoryColors[comment.category]} text-white p-2 rounded-lg`}>
              <p>{categorys[comment.category]}</p>
            </div>
          </Hover>
        </div>
      </div>
      {!!comment.fouderResponse && founderResponseOpen === true && (
        <div className="flex justify-center">
          <div className="bg-slate-600 gap-3 w-[95%] p-2 pl-8 rounded-b-lg text-white">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div className="flex text-white items-center justify-center bg-zinc-400 min-h-14 min-w-14 rounded-full">
                    {!!comment.fouderResponse.name ? (
                      <p>{getInitials(comment.fouderResponse.name)}</p>
                    ) : (
                      <Anonimus color="#fff" />
                    )}
                  </div>
                  <div>
                    <p>{!!comment.fouderResponse.name ? comment.fouderResponse.name : 'Anônimo'}</p>
                    <p className="text-sm text-zinc-200">
                      @{!!comment.fouderResponse.userName ? comment.fouderResponse.userName : '*****'}
                    </p>
                  </div>
                </div>
                {comment.fouderResponse.role.length > 0 && !comment.fouderResponse.role.includes('') && (
                  <div className="flex gap-1">
                    {comment.fouderResponse.role.map((item, key) => (
                      <div key={key}>
                        <Hover message="Verificado">
                          <div key={key}>{item == 'checked' && <MdVerified color="#4768ED" />}</div>
                        </Hover>
                        <Hover message="Fundador">
                          <div key={key}>
                            {item == 'founder' && <img className="w-4" src={founder} alt="founder " />}
                          </div>
                        </Hover>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p>{comment.fouderResponse.Message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
