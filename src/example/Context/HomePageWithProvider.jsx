import React, { PureComponent } from 'react';

import Button from '../Style/Button';
import LoadingProvider from './LoadingProvider';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';

function RowBComponent() {
  return <Button>버튼</Button>;
}

function RowCComponent() {
  return <ButtonWithLoadingContext>버튼</ButtonWithLoadingContext>;
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

class HomePageWithProvider extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <ButtonWithLoadingContext label="상태변경" />
      </LoadingProvider>
    );
  }
}

export default HomePageWithProvider;
