<Grid container columns={6} spacing={"25px"} >

                <Grid item xs={6} sm={3} md={2} className="projectgrid" >
                    <Card className="project" >
                        <CardContent className="projectname">
                            Ballad of the Woods
                        </CardContent>

                        <CardContent className="projectskills">
                            css, html, javascript, game design
                        </CardContent>

                        <CardContent className="projectpreview">
                            A browser based videogame loosely inspired by the musical <i>Hadestown</i>. Developed with Gianna McCardell and Dean Wilson.
                        </CardContent>

                        <CardActions className="actions" >
                            <Link href="https://webpages.sou.edu/~platts1/emda203" >+ see more</Link>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6} sm={3} md={2} className="projectgrid" >
                    <Card className="project" >
                        <CardContent className="projectname">
                            Recipe Substitutor
                        </CardContent>

                        <CardContent className="projectskills">
                            data scrubbing, python
                        </CardContent>

                        <CardContent className="projectpreview">
                            Program that generates comments suggesting that a random ingredient from a given ingredient list is substituted with one randomly chosen from a list of thousands of ingredients.
                        </CardContent>

                        {/*<CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>*/}
                    </Card>
                </Grid>

                <Grid item xs={6} sm={3} md={2} className="projectgrid" >
                    <Card className="project" >
                        <CardContent className="projectname">
                            Docker Access Management
                        </CardContent>

                        <CardContent className="projectskills">
                            docker, go, reactjs
                        </CardContent>

                        <CardContent className="projectpreview">
                            Unpublished Docker extension created for an internal hackathon. Allows management of Docker organizations, groups, and images from Docker Desktop. Developed with Victor Bersy, Jonathan Dieu, Sylvialynn Favello, and Ryan Hristovski.
                        </CardContent>

                        {/*<CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>*/}
                    </Card>
                </Grid>

                <Grid item xs={6} sm={3} md={2} className="projectgrid" >
                    <Card className="project">
                        <CardContent className="projectname">
                            Mortality (Anxieties)
                        </CardContent>

                        <CardContent className="projectskills">
                            adobe illustrator, graphic design, typography
                        </CardContent>

                        <CardMedia
                            component="img"
                            image={mothman}
                            alt="typographic poster about mothman and mortality"
                            sx={{ objectFit: "contain" }}
                        />

                        <CardContent className="projectpreview" sx={{ marginTop: "0px" }}>
                            Part of the <i>Anxieties</i> series which showcases western anxieties in the style of Constructivism. This piece depicts the anxieties of mortality and impending death.
                        </CardContent>

                        <CardActions className="actions" >
                            <Link href={mothman}>+ see more</Link>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6} sm={3} md={2} className="projectgrid" >
                    <Card className="project">
                        <CardContent className="projectname">
                            Surveillance (Anxieties)
                        </CardContent>

                        <CardContent className="projectskills">
                            adobe after effects, adobe illustrator, animation, graphic design, typography
                        </CardContent>

                        <CardMedia
                            component="img"
                            image={surveillance}
                            alt="typographic poster about surveillance"
                            sx={{ objectFit: "contain" }}
                        />

                        <CardContent className="projectpreview" sx={{ marginTop: "0px" }}>
                            Part of the <i>Anxieties</i> series which showcases western anxieties in the style of Constructivism. This still image is from an animation depicting the anxieties of surveillance.
                        </CardContent>

                        <CardActions className="actions" >
                            <Link href={makeitmoveanimation}>+ see more</Link>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6} sm={3} md={2} className="projectgrid" >
                    <Card className="project">
                        <CardContent className="projectname">
                            Computer Science Club Poster
                        </CardContent>

                        <CardContent className="projectskills">
                            adobe illustrator, graphic design, marketing, typography
                        </CardContent>

                        <CardMedia className="csposter"
                            component="img"
                            image={csclubposter}
                            alt="southern oregon university computer science club poster"
                            sx={{ objectFit: "contain" }}
                        />

                        <CardActions className="actions" >
                            <Link href={csclubposter}>+ see more</Link>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6} sm={3} md={2} className="projectgrid" >
                    <Card className="project">
                        <CardContent className="projectname">
                            Southern Oregon University Cybersecurity Program Poster
                        </CardContent>

                        <CardContent className="projectskills">
                            adobe illustrator, graphic design, marketing, typography
                        </CardContent>

                        <CardMedia className="cybersecposter"
                            component="img"
                            image={soucybersecposter}
                            alt="southern oregon university cybersecurity program poster"
                            sx={{ objectFit: "contain" }}
                        />

                        <CardActions className="actions" >
                            <Link href={soucybersecposter}>+ see more</Link>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6} sm={3} md={2} className="projectgrid" >
                    <Card className="project">
                        <CardContent className="projectname">
                            Lighthouses Magazine
                        </CardContent>

                        <CardContent className="projectskills">
                            adobe indesign, graphic design, marketing, typography
                        </CardContent>

                        <CardMedia className="lighthousesmagazine"
                            component="img"
                            image={lighthousesmagazinecover}
                            alt="lighthouses magazine cover page"
                            sx={{ objectFit: "contain" }}
                        />

                        <CardContent className="projectpreview" sx={{ marginTop: "0px" }}>
                            <i>Lighthouses</i> Magazine's December 2022 issue, which focuses on Oregon lighthouses
                        </CardContent>

                        <CardActions className="actions" >
                            <Link href={lighthousesmagazine}>+ see more</Link>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6} sm={3} md={2} className="projectgrid" >
                    <Card className="project">
                        <CardContent className="projectname">
                            Computer Science Club Poster
                        </CardContent>

                        <CardContent className="projectskills">
                            adobe illustrator, graphic design, marketing, typography
                        </CardContent>

                        <CardMedia className="csposter"
                            component="img"
                            image={csclubposter}
                            alt="southern oregon university computer science club poster"
                            sx={{ objectFit: "contain" }}
                        />

                        <CardActions className="actions" >
                            <Link href={csclubposter}>+ see more</Link>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>