import './TechStack.css';

interface Technology {
  name: string;
  icon: string;
  category: string;
}

function TechStack() {
  const technologies: Technology[] = [
    { name: 'Python', icon: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54', category: 'Languages' },
    { name: 'AWS', icon: 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white', category: 'Cloud' },
    { name: 'Azure', icon: 'https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white', category: 'Cloud' },
    { name: 'Docker', icon: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white', category: 'DevOps' },
    { name: 'Git', icon: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white', category: 'DevOps' },
    { name: 'GitHub', icon: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white', category: 'DevOps' },
    { name: 'TensorFlow', icon: 'https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white', category: 'ML/DL' },
    { name: 'PyTorch', icon: 'https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white', category: 'ML/DL' },
    { name: 'Keras', icon: 'https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white', category: 'ML/DL' },
    { name: 'scikit-learn', icon: 'https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white', category: 'ML/DL' },
    { name: 'Pandas', icon: 'https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white', category: 'Data Science' },
    { name: 'NumPy', icon: 'https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white', category: 'Data Science' },
    { name: 'Matplotlib', icon: 'https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black', category: 'Data Science' },
    { name: 'Plotly', icon: 'https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white', category: 'Data Science' },
    { name: 'MLflow', icon: 'https://img.shields.io/badge/mlflow-%23d9ead3.svg?style=for-the-badge&logo=numpy&logoColor=blue', category: 'MLOps' },
    { name: 'Flask', icon: 'https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white', category: 'Frameworks' },
    { name: 'Streamlit', icon: 'https://img.shields.io/badge/Streamlit-%23FE4B4B.svg?style=for-the-badge&logo=streamlit&logoColor=white', category: 'Frameworks' },
    { name: 'MySQL', icon: 'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white', category: 'Databases' },
    { name: 'SQLite', icon: 'https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white', category: 'Databases' },
    { name: 'Power BI', icon: 'https://img.shields.io/badge/power_bi-F2C811?style=for-the-badge&logo=powerbi&logoColor=black', category: 'Analytics' },
  ];

  const categories = Array.from(new Set(technologies.map(tech => tech.category)));

  return (
    <section id="tech-stack" className="tech-stack">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-categories">
          {categories.map(category => (
            <div key={category} className="tech-category">
              <h3 className="category-title">{category}</h3>
              <div className="tech-grid">
                {technologies
                  .filter(tech => tech.category === category)
                  .map(tech => (
                    <div key={tech.name} className="tech-item">
                      <img src={tech.icon} alt={tech.name} loading="lazy" />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
