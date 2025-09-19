function Accordion() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🤪",
    },
    {
      title: "Section 2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: "🤪",
    },
    {
      title: "Section 3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: "🤪",
    },
    {
      title: "Section 4",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: "🤪",
    },
  ];

  return (
    <div className="accordion-container">
      <h1 className="neon-title">ACCORDION</h1>
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-button ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="accordion-icon">{item.icon}</span>
            <span className="accordion-title">{item.title}</span>
            <span
              className={`accordion-arrow ${
                activeIndex === index ? "rotated" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`accordion-panel ${activeIndex === index ? "open" : ""}`}
          >
            <div className="panel-content">
              <div className="content-glow"></div>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
