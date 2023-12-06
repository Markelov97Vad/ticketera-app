import about from '@/assets/img/about.jpeg';
import PenIcon from '@/assets/img/pen-nib-svgrepo-com.svg';

function About() {
  return (
    <>
      <h2>AboutPage</h2>
      <button type="button" onClick={() => prompt('Отправить сообщение')}>
        Напиши мне 
        <PenIcon style={{ color: "red"}} width={30} height={30} />
      </button>
      <img src={about} alt="about" />
    </>
  );
}

export default About;