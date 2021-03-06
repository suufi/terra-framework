import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import ModalSrc from '!raw-loader!../../../../src/AbstractModal';

// Example Files
import AbstractModalIsOpened from '../example/AbstractModalIsOpened';
import AbstractModalIsOpenedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalIsOpened';
import AbstractModalCloseOnOutsideClick from '../example/AbstractModalCloseOnOutsideClick';
import AbstractModalCloseOnOutsideClickSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalCloseOnOutsideClick';
import AbstractModalIsFullscreen from '../example/AbstractModalIsFullscreen';
import AbstractModalIsFullscreenSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalIsFullscreen';
import AbstractModalAlertDialog from '../example/AbstractModalAlertDialog';
import AbstractModalAlertDialogSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalAlertDialog';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Modal',
        example: <AbstractModalIsOpened />,
        source: AbstractModalIsOpenedSrc,
      },
      {
        title: 'Disable closing the modal when clicking on the overlay',
        example: <AbstractModalCloseOnOutsideClick />,
        source: AbstractModalCloseOnOutsideClickSrc,
      },
      {
        title: 'Fullscreen Modal',
        example: <AbstractModalIsFullscreen />,
        source: AbstractModalIsFullscreenSrc,
      },
      {
        title: 'Alert Dialog Modal',
        example: <AbstractModalAlertDialog />,
        source: AbstractModalAlertDialogSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Modal',
        componentSrc: ModalSrc,
      },
    ]}
  />
);

export default DocPage;
