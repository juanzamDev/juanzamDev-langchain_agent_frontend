"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey  } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import Link from 'next/link';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardAgents({agent}) {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            <FilterDramaIcon/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title=""
        subheader=""
      />
      <h1 className='ml-5 font-bold'>{agent.agent}</h1>
      {/* <CardMedia
        component="img"
        height="194"
        image="/"
        alt="Agente Azure"
      /> */}
      <CardContent>
        <h1 >
          {agent.description}
        </h1>
      </CardContent>
      <CardActions disableSpacing className=' shadow-none'>
          {agent.agent === "Agente Azure" &&
          // <IconButton>
          <div className='flex flex-row items-center mt-8 mb-2 ml-3 gap-1'>
            <p className=' text-gray-700'>consultar </p>
            <Link href="/azure">
              <ArrowCircleRightIcon className=' text-gray-700' />
            </Link>
          </div>
          // </IconButton>
          }
          {agent.agent === "Agente Licitaciones" &&
          <div className='flex flex-row items-center mt-2 ml-3 gap-1'>
            <p className=' text-gray-700'>consultar </p>
            <Link href="/tenderagent">
              <ArrowCircleRightIcon className=' text-gray-700' />
            </Link>
          </div>
          }
          {agent.agent === "Agente Pruebas" &&
           <div className='flex flex-row items-center mt-14 ml-3 gap-1'>
           <p className=' text-gray-700'>consultar </p>
          <Link href="/pruebas">
            <ArrowCircleRightIcon className=' text-gray-700' />
          </Link>
          </div>
          }
      </CardActions>
    </Card>
  );
}
