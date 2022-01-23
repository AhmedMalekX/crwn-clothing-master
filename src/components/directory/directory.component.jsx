import React from 'react';

// Redux
import { connect } from 'react-redux';

// Reslect
import { createStructuredSelector } from 'reselect';

// Selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// Components
import { MenuItem } from '../menu-item/menu-item.component';

// Styles
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
