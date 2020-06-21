import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function SkeletonEffect() {
  return (
    <div>
      <Skeleton variant="rect" width={278} height={60} />
      <div
        style={{
          width: '278px',
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
