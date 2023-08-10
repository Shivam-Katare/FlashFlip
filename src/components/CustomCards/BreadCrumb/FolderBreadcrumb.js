import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

function FolderBreadcrumb({ folders, onBreadcrumbClick }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {folders.map((folder, index) => (
        <Link
          key={index}
          color="inherit"
          onClick={() => onBreadcrumbClick(index)}
        >
          {folder}
        </Link>
      ))}
    </Breadcrumbs>
  );
}

export default FolderBreadcrumb;
