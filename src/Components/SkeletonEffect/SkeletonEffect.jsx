import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function SkeletonEffect() {
  return (
    <div>
      <Skeleton variant="rect" width={210} height={50} />
      <div
        style={{
          width: '210px',
          height: '100px',
          backgroundColor: 'lightcyan',
        }}
      >
        <br />
        <div style={{ marginLeft: '20px' }}>
          <Skeleton variant="text" width={120} height={20} />
        </div>
      </div>
    </div>
  );
}
