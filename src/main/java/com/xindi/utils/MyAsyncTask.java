package com.xindi.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@EnableAsync
@Slf4j
public class MyAsyncTask {
    // 3. 添加一个任务, 并且注明任务的运行表达式
    @Async
    public void publicMsg() {
        try {
            Thread.sleep(5000);
            log.warn("异步任务处理完毕");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
