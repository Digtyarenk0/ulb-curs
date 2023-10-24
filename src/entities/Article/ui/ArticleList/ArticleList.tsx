/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import { FC, HTMLAttributeAnchorTarget, memo, useEffect, useRef, useState } from 'react';
import { ArticleListItemSkeleton } from '@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import classNames from 'classnames';
import { ARTICLES_LIST_ITEM_LOCALSTORAGE_IDX } from '@/shared/const/localstorage';
import { ArticlesPageFilters } from '@/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { ArticleView } from '@/entities/Article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  onLoadNextPart: () => void;
  isVirtuoza?: boolean;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
  view?: ArticleView;
}

const Header = () => <ArticlesPageFilters />;

const getSkeletons = () =>
  new Array(3).fill(0).map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
      <ArticleListItemSkeleton className={cls.card} key={index} view={ArticleView.BIG} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    target,
    onLoadNextPart,
    isVirtuoza = true,
  } = props;
  const [selectArticleId, setSelectArticleId] = useState(1);
  const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const page = sessionStorage.getItem(ARTICLES_LIST_ITEM_LOCALSTORAGE_IDX) || 1;
    setSelectArticleId(+page);
  }, []);

  useEffect(() => {
    let timeOutId: NodeJS.Timeout;
    if (view === ArticleView.SMALL) {
      timeOutId = setTimeout(() => {
        if (virtuosoGridRef.current) {
          virtuosoGridRef.current.scrollToIndex(selectArticleId);
        }
      }, 100);
    }
    return () => clearTimeout(timeOutId);
  }, [selectArticleId, view]);

  const renderArticle = (index: number, article: Article) => (
      <ArticleListItem
          article={article}
          view={view}
          className={cls.card}
          key={article.id}
          target={target}
          index={index}
    />
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const Footer = memo(() => {
    if (isLoading) {
      return <div className={cls.skeleton}>{getSkeletons()}</div>;
    }
    return null;
  });

  // eslint-disable-next-line react/no-unstable-nested-components
  const ItemConteiner: FC<{ height: number; width: number; index: number }> = memo((props) => (
      <div className={cls.ItemContainer}>
          <ArticleListItemSkeleton className={cls.card} key={props.index} view={view} />
      </div>
  ));

  if (!isLoading && !articles.length) {
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            <Text size={TextSize.L} title={t('Статьи не найдены')} />
        </div>
    );
  }

  if (!isVirtuoza) {
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={cls.card} 
                    index={Number(item.id)}
          />
        ))}
        </div>
    );
  }

  return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {view === ArticleView.BIG ? (
              <Virtuoso
                  style={{ height: '100%' }}
                  data={articles}
                  itemContent={renderArticle}
                  endReached={onLoadNextPart}
                  initialTopMostItemIndex={selectArticleId}
                  components={{
            Header,
            Footer,
          }}
        />
      ) : (
          <VirtuosoGrid
              ref={virtuosoGridRef}
              totalCount={articles.length}
              components={{
            Header,
            ScrollSeekPlaceholder: ItemConteiner,
          }}
              endReached={onLoadNextPart}
              data={articles}
              itemContent={renderArticle}
              listClassName={cls.ItemWrapper}
              scrollSeekConfiguration={{
            enter: (vocation: number) => Math.abs(vocation) > 200,
            exit: (vocation: number) => Math.abs(vocation) < 30,
          }}
        />
      )}
      </div>
  );
});
