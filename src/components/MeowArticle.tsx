'use client';


import React, {useEffect, useState} from 'react';

function MeowArticle() {
  const [text, setText] = useState('데이터 준비중 ...');
  const getData = async (): Promise<void> => {
    const res = await fetch('https://meowfacts.herokuapp.com', {
      next: { revalidate: 0},
    })
    const data = await res.json();
    setText(data.data[0])
  }

  useEffect(() => {
    getData()
  }, [])

  return <article>{text}</article>
}

export default MeowArticle;
