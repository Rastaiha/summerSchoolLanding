import {
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import { connect } from 'react-redux';
import Footer from '../components/SpecialComponents/Homepage/Footer';
import WorkshopList from '../components/SpecialComponents/Homepage/WorkshopList';
import LandingOurTeam from '../components/SpecialComponents/Homepage/LandingOurTeam';
import FAQ from '../components/SpecialComponents/Homepage/FAQ';
import questions from './FAQs';
import workshops from './Workshops';
import TimeLine from '../components/TimeLine/TimeLine';

const FirstColor = '#c89c2f';
const FirstColorBackText = 'black';
const SecondColor = '#e8332a';
const SecondColorBackText = 'white';
const useStyles = makeStyles((theme) => ({
  centerItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSection: {
    height: '100vh',
    color: 'black',
    position: 'relative',
  },
  landingBackground: {
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: `#ffc301 no-repeat 50% fixed`,
    filter: 'blur(4px)',
    webkitFilter: 'blur(4px)',
    opacity: 0.9,
    backgroundSize: 'cover',
    zIndex: -1,
  },
  firstPageContent: {
    height: '100vh',
  },
  title: {
    fontSize: 80,
    lineHeight: '80px',
    fontWeight: 900,
    color: '#e8332a',
    textShadow: '-2px 2px #bd0d01',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
      lineHeight: '50px',
    },
  },
  telegramLink: {
    display: 'inline-block',
    marginRight: 10,
    color: 'inherit',
  },
  h_iframe_aparat_embed_frame: {
    position: 'relative',
    '& iframe': {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      boxShadow: '0 2px 4px rgb(0 0 0 / 15%), 0 1px 3px rgb(0 0 0 / 25%)',
      borderRadius: 8,
    },
    '& span': {
      display: 'block',
      paddingTop: '57%',
    },
  },
  Section: {
    padding: theme.spacing(10, 2),
    zIndex: 5,
    position: 'relative',
  },
  eventDescriptionSection: {
    backgroundColor: FirstColor,
    color: FirstColorBackText,
  },
  featuresSection: {
    backgroundColor: FirstColor,
    color: FirstColorBackText,
  },
  featuresSectionPaper: {
    padding: theme.spacing(2),
    '& img': {
      width: '100%',
    },
  },
  RastaDescriptionSection: {
    backgroundColor: SecondColor,
    color: SecondColorBackText,
  },
  kaftar: {
    maxHeight: '30vh',
    maxWidth: '100%',
  },
  moreButton: {
    margin: theme.spacing(2, 'auto', 0),
    textAlign: 'center',
    display: 'table',
  },
  workshopsSection: {
    backgroundColor: SecondColor,
    color: SecondColorBackText,
  },
  sectionTitle: {
    margin: theme.spacing(2, 0, 4, 0),
  },
  FAQSection: {
    backgroundColor: FirstColor,
    color: FirstColorBackText,
  },
  cubeMelt: {
    maxWidth: '70%',
  },
  timeLineSection: {
    backgroundColor: SecondColor,
    color: SecondColorBackText,
  },
  teamSection: {
    backgroundColor: FirstColor,
    color: FirstColorBackText,
  },
  Buttons: {
    margin: theme.spacing(4, 0),
    direction: 'ltr',
  },
  titleButton: {
    backgroundColor: '#e8332a',
    color: 'white',
  },
}));
function SummerSchool() {
  const classes = useStyles();

  return (
    <>
      <section className={classes.titleSection}>
        <div id="back-to-top-anchor"></div>
        <div className={classes.landingBackground} />
        <Grid
          container
          justify="space-evenly"
          alignItems="center"
          direction="column"
          className={classes.firstPageContent}>
          <Grid item></Grid>
          <Grid item container alignItems="center" direction="column">
            <Grid item>
              <Typography component="h1" variant="h1" className={classes.title}>
                مدرسه تابستانه رستا
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup
                size="large"
                variant="contained"
                color="primary"
                className={classes.Buttons}>
                <Button
                  rel="noreferrer"
                  target="_blank"
                  href={'http://academy.rastaiha.ir/create_accoun'}
                  className={classes.titleButton}>
                  عضویت
                </Button>
                <Button
                  rel="noreferrer"
                  target="_blank"
                  href={'http://academy.rastaiha.ir/login'}
                  className={classes.titleButton}>
                  ورود
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid item>
            <img
              src={process.env.PUBLIC_URL + 'watermelon.gif'}
              alt="scroll"
              style={{ width: 150 }}
            />
          </Grid>
        </Grid>
      </section>
      <section
        className={`${classes.eventDescriptionSection} ${classes.Section}`}>
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          className={classes.sectionTitle}>
          چه خبره؟
        </Typography>
        <Grid container justify="space-evenly" alignItems="center" spacing={4}>
          <Grid
            item
            container
            justify="left"
            order={{ sm: 1, md: 2 }}
            spacing={2}
            xs={12}
            md={6}>
            <Grid item>
              <Typography variant="subtitle1">
                توی این رویداد قراره که ۵تا کارگاه علمی مختلف رو بگذرونیم و روز
                آخر هم یه بازی خفن داریم!
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                امسال کارگاه‌های علمی‌مون، گشت و گذاری هست در موضوعات علمی مختلف
                و حتی شاخه‌های بین رشته‌ای؛ از علوم کامپیوتر و فیزیک گرفته تا
                زیست‌شناسی که به زودی اطلاعات بیشتری درباره‌شون منتشر می‌کنیم :)
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                نکته‌ی مهم کارگاه‌ها اینه که در بستری که رستا اون رو توسعه داده،
                اجرا می‌شه. این بستر به نوعی طراحی شده که روحیه‌ی تعاملی و
                مسئله‌محوری کارگاه‌ها رو در شرایط مجازی هم حفظ کنه.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                امسال توی کارگاه‌ها دو بخش مختلف داریم. توی بخش اول شما توی
                گروه‌های سه نفره و به همراه همیارها محتواهای علمی کارگاه رو
                می‌گذرونید و در قسمت دوم قراره از چیزهایی که یادگرفتید بیشتر
                استفاده کنید؛ ممکنه نیاز باشه در نقش دانشمندان یه شرکت نظرات‌تون
                رو بیان کنید یا با همیارهاتون بازی‌های مرتبط با محتوای علمی
                کارگاه رو بگذرونید.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                به جز کارگاه‌ها که توی چهار روز برگزار می‌شن و بازی انتهایی که
                در روز پنجم هست، توی رویداد دورهمی و شهربازی هم داریم که به زودی
                بیشتر درباره‌شون توضیح می‌دیم.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                {
                  'برای اطلاع از اخباری که در آینده‌ای نزدیک منتشر می‌شه می‌تونید به کانال تلگراممون مراجعه کنید:'
                }
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/rastaihaOnline"
                  className={classes.telegramLink}
                  style={{ direction: 'ltr' }}>
                  {'@RastaihaOnline'}
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={5}
            order={{ sm: 2, md: 1 }}
            className={classes.video}>
            <div className={classes.h_iframe_aparat_embed_frame}>
              <span></span>
              <iframe
                title="مدرسه تابستانه رستا"
                src=""
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"></iframe>
            </div>
          </Grid>
        </Grid>
      </section>
      <section
        className={`${classes.RastaDescriptionSection} ${classes.Section}`}>
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          className={classes.sectionTitle}>
          رستا چیه؟
        </Typography>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item container justify="center" xs={12} sm={9} spacing={2}>
            <Grid item>
              <Typography variant="subtitle1">
                رستا جمعی علمی-ترویجی متشکل از دانشجوهای دانشگاه‌های صنعتی
                اصفهان، تهران، شریف، اصفهان، بهشتی و ... هست؛ جمعی که در تلاشه
                تا آموزش تعاملی رو جایگزین آموزش کنکوری و حفظی کنه و با اینکار،
                علاوه بر یاد دادن محتوای علمی به نحوه‌ای موثرتر، تفکر منطقی و
                خلاقیتِ بچه‌ها رو تقویت کنه و با نشون دادنِ توانمندی‌های
                بالقوه‌ی بچه‌ها به خودشون، اعتماد به نفسِ اونهارو افزایش بده.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3} container justify="center">
            <img
              className={classes.kaftar}
              src={process.env.PUBLIC_URL + '/logo_yellow.png'}
              alt=""
            />
          </Grid>
        </Grid>
        <Button
          target="_blank"
          variant="contained"
          color="secondary"
          className={classes.moreButton}
          href="/about_us">
          اطلاعات بیشتر
        </Button>
      </section>
      <section className={`${classes.featuresSection} ${classes.Section}`}>
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          className={classes.sectionTitle}>
          چه کارایی قراره انجام بدیم؟
        </Typography>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={3}>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Paper className={classes.featuresSectionPaper} elevation={3}>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} sm={4}>
                  <img
                    src={process.env.PUBLIC_URL + '/watermelon2.gif'}
                    alt=""
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h3" align="center" gutterBottom>
                    کارگاه مجازی
                  </Typography>
                  <Typography variant="subtitle1">
                    امسال باتوجه به آنلاین بودن رویداد دو دسته کارگاه طراحی
                    کردیم. در دسته اول منتورها کنارتون حضور دارن و بهتون کمک
                    میکنن و در دسته دوم سعی کردیم یه سری کارگاه طراحی کنیم که
                    بدون حضور منتور و به صورت خودآموز و قدم‌به‌قدم، مطالب رو به
                    شما آموزش بدن.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </section>
      <section className={`${classes.workshopsSection} ${classes.Section}`}>
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          className={classes.sectionTitle}>
          خوب قراره تو چه کارگاه‌هایی شرکت کنیم؟
        </Typography>
        <WorkshopList workshops={workshops} />
      </section>
      <section className={`${classes.FAQSection} ${classes.Section}`}>
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          className={classes.sectionTitle}>
          یه سری سوال برام پیش اومده. کجا می‌تونم جوابشون رو پیدا کنم؟
        </Typography>
        <Container>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <FAQ questions={questions} />
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={4}
              justify="center"
              alignItems="center">
              <img
                className={classes.cubeMelt}
                src={process.env.PUBLIC_URL + 'cubemelt-melt.gif'}
                alt=""
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={`${classes.timeLineSection} ${classes.Section}`}>
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          className={classes.sectionTitle}>
          برنامه زمانی رویداد به چه شکله؟
        </Typography>
        <TimeLine />
      </section>
      <section className={`${classes.teamSection} ${classes.Section}`}>
        <LandingOurTeam />
      </section>
      <Footer />
    </>
  );
}
export default connect()(SummerSchool);
