import {
  IArticle,
  TopicsQueryResponse,
} from '@erxes/ui-knowledgebase/src/types';
import { mutations, queries } from '@erxes/ui-knowledgebase/src/graphql';

import ArticleForm from '../../components/article/ArticleForm';
import ButtonMutate from '@erxes/ui/src/components/ButtonMutate';
import { IButtonMutateProps } from '@erxes/ui/src/types';
import React from 'react';
import { generatePaginationParams } from '@erxes/ui/src/utils/router';
import { gql, useQuery } from '@apollo/client';

type Props = {
  article: IArticle;
  currentCategoryId: string;
  queryParams: any;
  topicIds: string[];
  closeModal: () => void;
};

const ArticleContainer = (props: Props) => {
  const { article, queryParams, topicIds, currentCategoryId } = props;

  const topicsQuery = useQuery<TopicsQueryResponse>(
    gql(queries.knowledgeBaseTopics),
    {
      fetchPolicy: 'network-only',
    },
  );

  const renderButton = ({
    passedName: name,
    values,
    isSubmitted,
    callback,
    object,
  }: IButtonMutateProps) => {
    return (
      <ButtonMutate
        mutation={
          object
            ? mutations.knowledgeBaseArticlesEdit
            : mutations.knowledgeBaseArticlesAdd
        }
        variables={values}
        callback={callback}
        refetchQueries={getRefetchQueries(
          queryParams,
          currentCategoryId,
          topicIds,
        )}
        type="submit"
        isSubmitted={isSubmitted}
        successMessage={`You successfully ${
          object ? 'updated' : 'added'
        } an ${name}`}
      />
    );
  };

  const extendedProps = {
    ...props,
    renderButton,
    article,
    currentCategoryId,
    topics: topicsQuery?.data?.knowledgeBaseTopics || [],
  };

  return <ArticleForm {...extendedProps} />;
};

const getRefetchQueries = (
  queryParams,
  currentCategoryId: string,
  topicIds: string[],
) => {
  return [
    {
      query: gql(queries.knowledgeBaseArticles),
      variables: {
        ...generatePaginationParams(queryParams),
        categoryIds: [currentCategoryId],
      },
    },
    {
      query: gql(queries.knowledgeBaseCategories),
      variables: { topicIds: [topicIds] },
    },
    {
      query: gql(queries.knowledgeBaseArticlesTotalCount),
      variables: { categoryIds: [currentCategoryId] },
    },
  ];
};

export default ArticleContainer;
