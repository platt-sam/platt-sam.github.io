<Grid container columns={6} spacing={"25px"} >

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