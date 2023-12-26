import styles from './CategoryTab.module.scss'

type CategoryTabProps = {
  icon: JSX.Element;
  text: string
}

function CategoryTab({icon, text} : CategoryTabProps) {
  return (
    <div className={styles['category-tab']}>
      {icon}
      <span className={styles['category-tab__text']}>{text}</span>
    </div>
  );
}

export default CategoryTab;