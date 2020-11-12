<template>
  <div class="container">
    <transition name="fade">
      <div class="cards" key="1" v-if="$fetchState.pending">
        <!-- skeleton loader -->
        <div v-for="(imovel, index) in 4" :key="index" class="card">
          <div class="img">
            <div class="swiper-container skeleton skeleton-h skeleton-w"></div>
          </div>
          <div class="info-header">
            <div class="info-text">
              <div class="regiao skeleton skeleton-p skeleton-text"></div>
              <div class="name skeleton skeleton-p skeleton-text2"></div>
              <div class="info skeleton skeleton-p skeleton-text"></div>
              <div class="skeleton-p box">
                <div class="skeleton skeleton-box"></div>
                <div class="skeleton skeleton-box"></div>
                <div class="skeleton skeleton-box"></div>
                <div class="skeleton skeleton-box"></div>
              </div>
            </div>

            <div class="more">
              <div class="value skeleton-w">
                <div class="consulte skeleton-text2">
                  <div class="skeleton skeleton-text2"></div>
                </div>
              </div>
              <div class="btn">
                <div class="skeleton skeleton-box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cards" key="2" v-else-if="$fetchState.error">
        <p>An error occurred :(</p>
      </div>

      <div class="cards" key="3" v-else>
        <!-- conteudo ja carrgado -->
        <div v-for="(imovel, index) in imoveis" :key="index" class="card">
          <div class="img">
            <div class="id">
              {{ imovel.id }}
            </div>

            <swiper :slides-per-view="1" class="swiper" :options="swiperOption">
              <swiper-slide
                v-for="(img, imgIndex) in imovel.imgs"
                :key="imgIndex"
                :id="imgIndex"
                class="backcard"
                :style="{
                  'background-image': `url(${img})`,
                }"
              >
              </swiper-slide>
              <div slot="button-prev" class="swiper-button-prev"></div>
              <div slot="button-next" class="swiper-button-next"></div>
              <div class="swiper-pagination" slot="pagination" />
            </swiper>
          </div>
          <div class="info-header">
            <div class="info-text">
              <div class="regiao">
                {{ imovel.regiao }}
              </div>
              <div class="name">
                {{ imovel.name }}
              </div>
              <div class="info">
                {{ imovel.info }}
              </div>

              <div class="box">
                <div v-if="imovel.m2" class="box-icon m2">
                  <img src="~assets/img/icons/expand.svg" height="20" alt="" />
                  {{ imovel.m2 }}
                </div>
                <div v-if="imovel.domitorios" class="box-icon domitorios">
                  <img src="~assets/img/icons/bed.svg" height="20" alt="" />
                  {{ imovel.domitorios }} Dormitórios
                </div>
                <div v-if="imovel.suites" class="box-icon suites">
                  <img src="~assets/img/icons/porta.svg" height="20" alt="" />
                  {{ imovel.suites }} Suítes
                </div>
                <div v-if="imovel.vagas" class="box-icon vagas">
                  <img src="~assets/img/icons/car.svg" height="20" alt="" />
                  {{ imovel.vagas }} Vagas
                </div>
              </div>
            </div>

            <div class="more">
              <div class="value">
                <div v-if="imovel.value">
                  <span class="prev">R$</span>
                  <span class="number">
                    {{
                      imovel.value.toLocaleString("pt-br", {
                        minimumFractionDigits: 0,
                      })
                    }}
                  </span>
                </div>
                <div class="consulte" v-else>Consulte-nos</div>
              </div>
              <div class="btn">
                <div class="button">Conferir</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <div class="item">
            <img src="~assets/img/icons/chevron-back.svg" height="20" alt="" />
          </div>
          <template v-for="(page, index) in 4">
            <div class="item" :key="index">
              {{ index + 1 }}
            </div>
          </template>
          <div class="item">
            <img
              src="~assets/img/icons/chevron-forward.svg"
              height="20"
              alt=""
            />
          </div>
        </div>
        <button class="button" @click="$fetch">Refresh</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, A11y]);

import loadData from "../bussiness/loadData";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      imoveis: [],
    };
  },
  async fetch() {
    this.imoveis = await loadData();
  },
  fetchOnServer: false, //lado cliente para visualizar o skeleton
};
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* skeleton css */
.skeleton {
  background-color: rgb(236, 236, 236);
  animation: backcolor 2s infinite;
}
.skeleton-text {
  height: 1rem;
  width: 60%;
}
.skeleton-text2 {
  height: 2rem;
  width: 80%;
}
.skeleton-box {
  border: none;
  height: 2rem;
  width: 5rem;
}
.skeleton-h {
  height: 100%;
}
.skeleton-w {
  width: 100%;
}
.skeleton-p {
  padding: 1rem 0;
}
@keyframes backcolor {
  0% {
    background-color:  #e0e0e0 ;
  }
  60% {
    background-color: #cfcfcf;
  }
  100% {
    background-color: #e0e0e0;
  }
}

.container {
  margin: 0 auto;
  padding: 5rem 0;
  /* somente para melhor visualização */
  min-height: 100vh;
}

.cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.card {
  width: 100%;
  background: white;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.card .img {
  position: relative;
}
.card:hover {
  box-shadow: 0 5px 15px rgba(68, 68, 68, 0.2);
  transition: box-shadow 0.2s ease-out;
}
.card .id {
  position: absolute;
  background: #fff;
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  z-index: 10;
  right: 1rem;
  top: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #666;
  cursor: pointer;
}
.card .id:hover {
  box-shadow: 1px 2px 9px 3px rgb(68 68 68 / 30%);
}

.swiper-container {
  height: 300px;
  width: 100%;
  overflow: hidden;
  margin: 0;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #d7d7d7;
}
.backcard {
  background-size: cover;
  background-position: center;
  animation: 2s appear;
}

@keyframes appear {
  0% {
    transform: scale(1.3);
    margin-left: 5%;
  }
  100% {
    transform: scale(1);
    margin-left: 0;
  }
}

.swiper-button-prev,
.swiper-button-next {
  color: white !important;
  outline: none;
}
.swiper-pagination-bullet-active {
  background: white !important;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  text-shadow: 2px 2px 10px #000000;
}
.swiper-pagination-bullet {
  box-shadow: 1px 2px 9px 3px rgb(68 68 68 / 30%);
}
.info-header {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
}
.info-text {
  padding: 1rem;
}
.box {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-content: flex-start;
  margin-top: 1rem;
  flex-wrap: wrap;
}
.info-text .regiao,
.info-text .info {
  color: #666;
  text-transform: uppercase;
  font-size: 1rem;
}
.info-text .name {
  color: #00354e;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  margin: 0.3rem 0;
}
.box-icon {
  border: 1px solid rgb(136, 136, 136);
  color: #555;
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
}
.box-icon:hover {
  border: 1px solid rgb(124, 124, 124);
  color: rgb(65, 65, 65);
  background: rgb(230, 230, 230);
}
.more {
  border-top: 1px solid #d7d7d7;
  padding: 1rem;
  display: flex;
  direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.more .value .prev {
  font-size: 1rem;
  color: #00354e;
  font-weight: 400;
}
.more .value .number {
  font-size: 2rem;
  color: #00354e;
  font-weight: 700;
}
.more .value .consulte {
  font-size: 2rem;
  color: #333;
  font-weight: 400;
}
.button {
  background: #00354e;
  color: white;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  width: 100%;
  transition: 0.3s;
  border: none;
}
.button:hover {
  background: #004a6d;
}
.pagination {
  width: 100%;
  display: flex;
  gap: 0.5rem;
  direction: row;
  justify-content: center;
}
.pagination .item {
  background: white;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
}

@media (min-width: 480px) {
  .container {
    max-width: 480px;
  }
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
  .card {
    flex-direction: row;
  }
  .swiper-container {
    width: 300px;
    border-radius: 5px 0 0 5px;
    border-right: 1px solid #d7d7d7;
    border-bottom: none;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
  .card .id {
    right: auto;
    left: 1rem;
    top: 1rem;
  }
  .info-header {
    flex-direction: row;
  }
  .more {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-top: none;
    border-left: 1px solid #d7d7d7;
  }
  .more .btn {
    margin-top: 1rem;
    width: 100%;
  }
  .info-text {
    width: 70%;
  }
  .more {
    width: 30%;
  }
  .more .value {
    margin-top: 1rem;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
</style>
