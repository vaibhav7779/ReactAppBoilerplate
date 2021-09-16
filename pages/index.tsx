import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Button, Header, Card, Typography } from "@subzero/glacier";
import { Container, Grid } from "@material-ui/core";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  const handleCardClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Head>
        <title>Create Next App With SubZero</title>
        <meta name="description" content="Next.Js with SubZero" />
        <link rel="icon" href="/Union.png" />
      </Head>

      <div className={styles.bodyContainer}>
        <div className={styles.headerContainer}>
          <Header />
        </div>

        <main>
          <div className={styles.bannerContainer}>
            <Container maxWidth="sm">
              <Typography
                type="h2"
                className={`${styles.textAlignC} ${styles.gutterBottom}`}
              >
                {" "}
                Next.Js Boilerplate{" "}
              </Typography>
              <Typography
                type="body-1"
                className={`${styles.textAlignC} ${styles.gutterBottom}`}
              >
                Welcome to Next.js with Subzero which will bring consistency to
                your experiences by using this Boilerplate to create seamless
                experiences
              </Typography>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                className={styles.bannerContainerButton}
              >
                <Grid item>
                  <Button
                    onClick={() =>
                      handleCardClick("https://subzero.staging.axisb.com/")
                    }
                  >
                    Start Learning SubZero
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="secondary"
                    className={styles.btnSecBorder}
                    onClick={() => handleCardClick("https://nextjs.org")}
                  >
                    Documentation
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </div>
        </main>

        <main className={styles.mainContainer}>
          <Container maxWidth="md" className={styles.contentContainer}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                <Card
                  assets="No"
                  cardType="clickable"
                  content="Axis Bank's end to end design language to create simple experiences"
                  onCardClick={() =>
                    handleCardClick("https://subzero.staging.axisb.com/")
                  }
                  title="Subzero Documentation"
                  type="label"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Card
                  assets="No"
                  cardType="clickable"
                  content="Readymade componet library for Axis products to create seamless products"
                  onCardClick={() =>
                    handleCardClick("https://storybook.staging.axisb.com/")
                  }
                  title="Storybook for Subzero"
                  type="label"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Card
                  assets="No"
                  cardType="clickable"
                  content="Next.js is an open-source development framework built on top of Node.js"
                  onCardClick={() => handleCardClick("https://nextjs.org")}
                  title="Next.Js Documentation"
                  type="label"
                />
              </Grid>
            </Grid>
          </Container>
        </main>

        <footer className={styles.footerContainer}>
          <Container maxWidth="sm">
            <Typography
              type="h4"
              className={`${styles.textAlignC} ${styles.gutterBottom}`}
            >
              @subzer/glacier
            </Typography>
            <Typography
              type="subheading"
              className={`${styles.textAlignC} ${styles.gutterBottom}`}
            >
              @Copyright 2021 Subzero Design System
            </Typography>
            <div className={styles.footerLogo}>
              <Image
                src="/Union.png"
                alt="subzero Logo"
                width={30}
                height={30}
              />
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default Home;
