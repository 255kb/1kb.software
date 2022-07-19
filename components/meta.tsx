import Head from 'next/head';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { MetaData } from '../models/common.model';

const rootUrl = 'https://1kb.software';

const Meta: FunctionComponent<MetaData> = function (props) {
  const router = useRouter();

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta
        property="og:image"
        content={rootUrl + '/images/' + (props.image || 'og-image.png')}
      />
      <meta
        property="og:url"
        content={rootUrl + (props.url ? props.url : router.pathname + '/')}
      />
      <meta property="og:title" content={'1kB.software - ' + props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content={props.ogType || 'website'} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={'1kB.software - ' + props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta
        name="twitter:image"
        content={rootUrl + '/images/' + (props.image || 'twitter-image.png')}
      />
    </Head>
  );
};

export default Meta;
