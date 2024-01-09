<template>
  <nuxt-layout>
    <template v-slot:aside>
      <nav-contact />
    </template>
    <div class="max-width:960">
      <base-title>Contact</base-title>
      <base-excerpt>Got a project you would like to discuss? Or maybe you just want to say hello? Fill out the form below and I'll do my best to respond asap.</base-excerpt>
      <form>
        <ul class="m:0 p:0 list-style:none">
          <li>
            <label for=""><input name="" type="text"></label>
          </li>
          <li><label for=""><input name="" type="text"></label></li>
          <li><label for=""><input name="" type="text"></label></li>
          <li><label for=""><input name="" type="text"></label></li>
          <li><label for=""><input name="" type="text"></label></li>
          <li><label for=""><input name="" type="text"></label></li>
          <li><label for=""><input name="" type="text"></label></li>
          <li><label for=""><input name="" type="text"></label></li>
          <li><label for=""><input name="" type="text"></label></li>
          <li><label for=""><input name="" type="text"></label></li>
        </ul>
      </form>
    </div>
  </nuxt-layout>
</template>