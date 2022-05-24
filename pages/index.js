import Head from "next/head";
import Center from "../components/Banner/Center";
import Top from "../components/Banner/Top";
import EditorChoice from "../components/EditorChoice";
import Layout from "../components/Layout";
import ProductMatches from "../components/ProductMatches";
import Articles from "../components/Articles";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getData } from "../src/store/actions/dataAction";
import Review from "../components/Review";
import PopularGroup from "../components/PopularGroup";
import LatestVideo from "../components/LatestVideo";
import Trending from "../components/Trending";
import TopBrand from "../components/TopBrand";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>
          Female Daily - Info, Artikel, Video dan Review Seputar Kecantikan
        </title>
        <meta
          name="title"
          content="Female Daily - Info, Artikel, Video dan Review Seputar Kecantikan"
        />
        <meta
          name="description"
          content="Temukan Informasi terkini dan terlengkap seputar dunia kecantikan mulai dari skin care, makeup, review produk dan brand kecantikan lokal maupun internasional."
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="icon"
          href="https://play-lh.googleusercontent.com/8zDhXFsQEut_32vr1zTysFHp7yWKjZME1mgWGBT6f0u4G57CgtQIbdiN1uG4MKIbCZI"
        />
      </Head>

      <Layout>
        <Top />
        <EditorChoice />
        <ProductMatches />
        <Center />
        <Articles />
        <Review />
        <PopularGroup />
        <LatestVideo />
        <Trending />
        <TopBrand />
      </Layout>
    </>
  );
}
