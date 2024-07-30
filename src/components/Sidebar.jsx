import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLinkClick = (index, href) => {
    if (items[index].subLinks) {
      // 如果有子链接，则阻止默认跳转行为，仅切换展开状态
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      // 如果没有子链接，则直接跳转
      window.location.href = href;
    }
  };

  return (
    <div className="sidebar">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href || '#'}  // 如果有指定href，则使用，否则使用'#'作为占位符
              onClick={(e) => {
                e.preventDefault(); // 阻止链接默认跳转行为
                handleLinkClick(index, item.href);
              }}
              className="nav-link"
            >
              {item.label}
            </a>
            {item.subLinks && activeIndex === index && (
              <ul className="sub-links">
                {item.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <a href={subLink.href} className="nav-link">
                      {subLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
