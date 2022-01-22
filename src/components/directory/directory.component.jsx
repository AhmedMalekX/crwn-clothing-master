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
import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
