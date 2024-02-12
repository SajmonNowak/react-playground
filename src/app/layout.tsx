'use client'

import { Inter } from "next/font/google";
import '@mantine/core/styles.css';
import {ColorSchemeScript, Container, Grid, MantineProvider} from '@mantine/core';
import {theme} from '@/style/theme';
import SideNav from '@/app/components/SideNav';


const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            <ColorSchemeScript />
        </head>
        <body className={inter.className}>
                <MantineProvider theme={theme}>
                    <Container size='xl' p={50}>
                        <Grid>
                            <Grid.Col span="content" h={'100vh'}>
                                <SideNav />
                            </Grid.Col>
                            <Grid.Col span="auto" ml="lg">
                                {children}
                            </Grid.Col>
                        </Grid>
                    </Container>
                </MantineProvider>
        </body>
    </html>
  );
}
