import { css } from '@/css';
import {Container } from '@/jsx'

export default function Home() {
  return (
    <Container py="10">
      <div className={css({
        fontSize: '3xl',
        fontWeight: 'bold',
      })}>My Portfolio Website</div>
    </Container>
  );
}
