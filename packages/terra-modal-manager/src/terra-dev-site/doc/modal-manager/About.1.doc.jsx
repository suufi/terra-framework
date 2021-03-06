import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

// Component Source
import ModalManagerSrc from '!raw-loader!../../../../src/ModalManager';
import ModalManagerExample from '../example/ModalManagerExample';
import ModalManagerExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ModalManagerExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    propsTables={[
      {
        componentSrc: ModalManagerSrc,
      },
    ]}
    examples={[
      {
        title: 'Example',
        example: <ModalManagerExample />,
        source: ModalManagerExampleSrc,
      },
      {
        title: 'Disclosure Accessory Example',
        example: <ModalManagerExample showDisclosureAccessory />,
        source: ModalManagerExampleSrc,
      },

    ]}
  />
);

export default DocPage;
